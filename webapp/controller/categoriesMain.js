var productsTableMainPage = document.getElementById("products-table-main");

function onCategoriesLoaded(request) {
	//Fill the categories array.
	categories = JSON.parse(request.responseText);
    for (var i = 1; i <= productsTableMainPage.children.length-1; i++) {
        if (productsTableMainPage.children[i].cells[3].textContent == "") {
            productsTableMainPage.children[i].cells[3].textContent = "Null";
        }
        for (var j = 1; j <= categories.length; j++) {
             
            if (productsTableMainPage.children[i].cells[3].textContent == categories[j-1].category_id){
                productsTableMainPage.children[i].cells[3].textContent = categories[j-1].name
                console.log(categories[j-1].name)
            }
        }
    }
}

function onCategoriesLoadingError(request) {
	if (request && request.status != 401) {
		alert("Could not load the product categories because of the following error:\r\n\r\n" + request.responseText);
	}
}
function loadCategories(callback = null) {
	loadCategoriesCallback = callback;

	sendRequest("GET", "API/V1/Categories", onCategoriesLoaded, onCategoriesLoadingError);
}
setTimeout(() => {
loadCategories();
}, "1000")
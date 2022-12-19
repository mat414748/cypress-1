var productsTableMainPage = document.getElementById("products-table-main");

function onCategoriesLoaded(request) {
	//Fill the categories array.
	categories = JSON.parse(request.responseText);
	console.log(categories);
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
loadCategories();
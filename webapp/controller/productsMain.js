var productsTableMainPage = document.getElementById("products-table-main");

/**
 * Called when the products loading request succeeded.
 * @param request The request object.
 */
function onProductsLoaded(request) {
	//productsTableMainPage.innerHTML = ``;
	var products = JSON.parse(request.responseText);
	for (var i = 0; i < products.length; i++) {
		if (products[i].active == 1) {
		var productRowMain = document.createElement("tr");
		productsTableMainPage.appendChild(productRowMain);
	
		var skuCell = document.createElement("td");
		skuCell.innerText = products[i].sku;
		productRowMain.appendChild(skuCell);

		var nameCell = document.createElement("td");
		nameCell.innerText = products[i].name;
		productRowMain.appendChild(nameCell);

		var activeCell = document.createElement("td");
		activeCell.innerText = products[i].active;
		productRowMain.appendChild(activeCell);

		console.log(document.getElementsByName('categoryType'));
		if (document.getElementsByName('categoryType')[0].content == "1") {
			var categoryCell = document.createElement("td");
			console.log(products[i])
			categoryCell.innerText = products[i].id_category;
			productRowMain.appendChild(categoryCell);
		}

		var priceCell = document.createElement("td");
		priceCell.innerText = products[i].price ? products[i].price : "";
		productRowMain.appendChild(priceCell);

		var stockCell = document.createElement("td");
		if (products[i].stock <= 3){
			stockCell.style.color = 'red';
		}
		stockCell.innerText = products[i].stock;
		productRowMain.appendChild(stockCell);
		}
	}
}


/**
 * Called when the products loading request failed.
 * @param request The request object.
 */
function onProductsLoadingError(request) {
	//Do noting if it is a 401 error, since the login form will already be shown at this point.
	if (request.status == 401) {
		return;
	}

	alert("Erör: " + request.statusText);
}

/**
 * Called when the delete button is pressed on one of the product table rows.
 * @param event The event object.
 */
function onDeleteButtonPressed(event) {
	var sku = event.currentTarget.getAttribute("product-sku");
	if (!confirm("Are you sure that you want to delete the product with the SKU " + sku + "?")) {
		return;
	}

	sendRequest("DELETE", "API/V1/Product/" + sku, onProductDeleted, onProductDeletionError);
}

/**
 * Called when the products deletion request succeeded.
 * @param request The request object.
 */
function onProductDeleted(request) {
	refreshProducts();
}

/**
 * Called when the products deletion request failed.
 * @param request The request object.
 */
function onProductDeletionError(request) {
	alert("The product could not be deleted. Please try again!");
}

/**
 * Refreshes the products table with the newest product list from the API.
 */
function refreshProducts() {
	sendRequest("GET", "API/V1/Products", onProductsLoaded, onProductsLoadingError);
}

//Load the products initially.
refreshProducts();

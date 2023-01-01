<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<meta name="categoryType" content="1" />
<h1>Welcome to Productive!</h1>
<script> 
    function filtration() {
    if (document.getElementById("Filtr").value == "No filter"){
        console.log("Da");
        window.location='index.php';
    }     
    else{
        console.log("Ne");
    }        
}
</script> 
<select style="width: 280px" id="Filtr" onchange="filtration()">
  <option>No filter</option>
  <option selected="">With categories</option>
</select>
<table id="products-table-main">
        <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Active</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
        </tr>
</table>
<script src="controller/productsMain.js"></script>
<script src="controller/categoriesMain.js"></script>
<script src="controller/sortByAll.js"></script>
<?php require "view/blocks/page_end.php"; ?>
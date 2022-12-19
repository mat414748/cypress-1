<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<h1>Welcome to Productive!</h1>
<script> 
    function filtration() {
    if (document.getElementById("Filtr").value == "No filter"){
        console.log("Da");
    }     
    else{
        console.log("Ne");
    }        
}
</script> 
<select style="width: 280px" id="Filtr" onchange="filtration()">
  <option selected="">No filter</option>
  <option>With categories</option>
</select>
<table id="products-table-main">
        <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Active</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
        </tr>
</table>
<script src="controller/productsMain.js"></script>
<!-- <script src="controller/categoriesMain.js"></script> -->
<script src="controller/sortByAll.js"></script>
<?php require "view/blocks/page_end.php"; ?>
<!-- <script> 
    window.fizzbuzz = function (number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return 'FizzBuzz'
        }
        else if (number % 3 == 0) {
            return 'Fizz'
        } else if (number % 5 == 0) {
            return 'Buzz'
        }
    }
    window.add = function (arrayich) {
        const cutedArray = Array.from(arrayich);
        let splitter = "";
        cutedArray.forEach(element => {
            if (isNaN(element)) {
                splitter = element
            }
        })
        const splitedArrayich = arrayich.split(splitter)
        splitedArrayich.forEach((element, index, array) => {
            if (element < 0) {
                array.splice(index,1)
            }
        })
        const newArrayich = splitedArrayich
        if (newArrayich[newArrayich.length-1] == "") {
             newArrayich.splice(newArrayich.length-1,1)
             return newArrayich
        } else {
            return newArrayich
        } 
    }
</script> -->
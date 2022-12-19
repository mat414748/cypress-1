document.getElementById("Filtr").addEventListener("change", function() {
        if (document.getElementById("Filtr").value == "No filter"){
            document.getElementById("products-table-main").remove();
            document.getElementById("startich").click();
        }     
        else{
            document.getElementById("products-table-main").remove();

            const table = document.createElement("table");
            table.id = "products-table-main";
            
            console.log("Ne");
        }       
});
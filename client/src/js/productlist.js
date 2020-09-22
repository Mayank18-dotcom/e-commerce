$(document).ready(function () {  
    $('#dataTable').DataTable({  
        "ajax": {  
            "url": "/Home/GetData",  
            "type": "GET",  
            "datatype": "json"  
        },  
        "columns": [  
            { "data": "S NO." },  
            { "data": "Product id" },  
            { "data": "Product title" },  
            { "data": "Subcategory" }
        ]  
    });  
}); 
$(document).ready (function () {  
    $('table').DataTable();
    // $('table').after ('<div id="nav"></div>');  
    // var rowsShown = 100;  
    // var rowsTotal = $('table tbody tr').length;  
    // console.log(rowsTotal);
    // var numPages = rowsTotal/rowsShown;  
    // for (i = 0;i < numPages;i++) {  
    //     var pageNum = i + 1;  
    //     $('#nav').append ('<a href="#" page="'+i+'"><button>'+pageNum+'</button></a> ');  
    // }  
    // $('table tbody tr').hide();  
    // $('table tbody tr').slice (0, rowsShown).show();  
    // $('#nav a:first').addClass('active');  
    // $('#nav a').bind('click', function() {  
    //     $('#nav a').removeClass('active');  
    //     $(this).addClass('active');  
    //     var currPage = $(this).attr('page');  
    //     var startItem = currPage * rowsShown;  
    //     var endItem = startItem + rowsShown;  
    //     $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).  
    //     css('display','table-row').animate({opacity:1}, 300);  
    // });  
});  
// function sortRows()
// {
    
//     var   txtValue;
  
//     let filter = ""+$('#search-bar').val().toUpperCase();
//     let table = $('table');
//     let tr = $('table tr');
    
//     let tdLen = $('table th').length;
    
//   // Loop through all table rows, and hide those who don't match the search query
//     for (let i = 0; i <tr.length; i++) {
        
//     for(let j=0;j<tdLen;j++){

//     let td = tr[i].getElementsByTagName("td")[j];
    
//     if (td) {
//         txtValue =  td.innerText.toUpperCase();
        
//         let index=txtValue.indexOf(filter); 

//         if (index==0){
            
//         tr[i].style.display = "table-row";
//         break
//         } else {
//         tr[i].style.display = "none";
//         }
//         }
//     }
//     }

// }
// function sortTables(n)
// {

// }
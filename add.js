$(document).ready(function() {  
  $(".add").click(function() {
    var name= $("#name").val();
    var age= $("#age").val();
    var add= "<tr><td>"+name+"</td><td>"+age+"</td></tr>";
    $("table tbody").append(add);      
    document.getElementById('name').value = ''; 
    document.getElementById('age').value = '';
  });    
});
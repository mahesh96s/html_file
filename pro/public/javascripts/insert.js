$(document).ready(function() {  
  $("#insert").click(function() {
    var name= $("#name").val();
    var addr= $("#address").val();
    var number= $("#number").val();
    var email= $("#email").val();    
    var add= "<tr><td><form><input type='checkbox' value='id'></form></td><td>"+name+"</td><td>"+addr+"</td><td>"+number+"</td><td>"+email+"</td></tr>";   
    $("table tbody").append(add); 
  });    
});
console.log(name+""+addr+""+number+""+email);


function change()
{
    var tf =document.getElementById('fahrenheit').value; 
    var tc=document.getElementById("celsius").value;
    
    //formula to convert from celsius to fahrenheit
    tf = tc*(9/5) + 32;
    //place fahrenheit value at textfield
    document.getElementById("fahrenheit").value=tf;

}
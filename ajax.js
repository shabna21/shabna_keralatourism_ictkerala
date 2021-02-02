function f1(){
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        // console.log(response);
        var Jjson = response.grocery;
        // console.log(Jjson);             
         var output = "<table>"; 
         output += "<table border='1'>";
          output +=   ("<tr><td>serial_no</td><td>Item</td><td>Quantity</td><td>Unit</td><td>Department</td><td>Notes</td></tr>");
         
         for(var i=0;i<Jjson.length;i++)
        {
            output += "<tr>"
            output += "<td>" + Jjson[i].serial_no + "</td>";
            output += "<td>" + Jjson[i].name + "</td>";
            output += "<td>" + Jjson[i].quantity + "</td>";
            output += "<td>" + Jjson[i].unit + "</td>";
            output += "<td>" + Jjson[i].department + "</td>";
            output += "<td>" + Jjson[i].notes + "</td>";       
            output += "</tr>" ;
    }
    output += "</table>";
    document.getElementById("demo").innerHTML=output;
    }
    }
xhttp.open("GET","ajax.json",true);
xhttp.send();
}



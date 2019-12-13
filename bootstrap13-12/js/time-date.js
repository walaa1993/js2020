var currentDate=new Date();
day=currentDate.getDate();
month=currentDate.getMonth()+1;
year=currentDate.getFullYear();
document.write(day+"/"+month+"/"+year+"<br>");

sec=currentDate.getSeconds();
min=currentDate.getMinutes()+1;
hour=currentDate.getHours();
document.write(hour+":"+min+":"+sec+"<br>");

/*var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML=days[currentDate.getDay()];*/

var arr = currentDate.toDateString();
console.log(arr);
arr=arr.split(" ");
document.write(arr+"<br>");

/*document.getElementById("demo").innerHTML new Date().toLocalString('default',{month:'long'});*/

var date = new Date();
var dateInMs = date.getTime();

console.log(dateInMs);
var y = new Date(dateInMs);
console.log(y);





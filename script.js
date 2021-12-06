var h=0;
var w=0;

function fun1(){
    h=prompt("enter your height in meters");
    w=prompt("enter your weight");
    var a=w/(h*h);
    console.log(a); 
    document.getElementById("bmi").innerHTML=a;
    if(a<18)
    {var b="your body fat is low according to bmi, try to eat more nutrious food";
console.log(b);
document.getElementById("result").innerHTML=b;
}
if(a>=18 && a<25)
{
    var b="your body fat ratio is perfect just try to control overeating";
console.log(b);
document.getElementById("result").innerHTML=b;
}
else{
    var b="your Body fat is too high try to eat less and do exercise";
    console.log(b);

    document.getElementById("result").innerHTML=b;}

}

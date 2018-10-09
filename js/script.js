/*var a, b, c, sum, raz, pro, de2, slovo1, slovo2, slovo3, slovo4, sl1, sl2;

a = 100;
b = 25;
c = 36;
sum = a+b+c;
console.log(sum);
raz = b-a-c;
console.log(raz);
pro = a*b*c;
console.log(pro);
de2= b/a/c;
console.log(de2);


console.log("---Slova---");
slovo1 = "Dimka";
slovo2 = "Dashka";
slovo3 = "Tolya";
slovo4 = "Katya";
sl1 = slovo1+ "," +slovo2;
console.log(sl1);
sl2 = slovo3+ "," +slovo4;
console.log(sl2);
*/
/*
var x, total, summ;
x=0;
total=0;

do{
  console.log(total);
  total=total+x;
  x=x+2; //x+=2

}
while (x<=50)
  console.log(total);
console.log(x);
*/
/*
var myObject = {};
  myObject.bar1 = "soroka"
  myObject.bar2 = 567,
  myObject.bar3 = false,
  myObject.bar4 = true,
  myObject.bar5 = "hleb"

for (var b in myObject) {
  console.log (b);
  console.log (myObject[b]);
  console.log ("^------^");
}
*/
/*
var mas = new Array("soroka",567,false,true,"hleb");
for (var t in a) {
  console.log (t);
}
*/
/*
var myObject = function(){
var a=prompt("Твоё имя?")
var b=prompt("Ваша фамилия?")
if (a == b) {
console.log(a+" "+b);
}

else{
 console.log("Строки не одинаковы");
}
}
myObject();
*/
  var myExple = function(chpok){
  var chpok1 = chpok.substring(2,5) // "kem": 2-й, 3-й и 4-й и 5-й символы
    console.log(chpok1);
    console.log("^--1--^");

  var chpok2 = chpok.lastIndexOf("n"); // позиция последнего символа n.
    console.log(chpok2);
    console.log("^--2--^");

   var chpok3 = chpok.charAt(0); // первый символ
    console.log(chpok3);
    console.log("^--3--^");

     var chpok4 = chpok.slice(-3); // последние 3 символа
       console.log(chpok4);
       console.log("^--4--^");

      var chpok5 = chpok.indexOf("e", 3); // позиция первого символа "e", следующего за 3 символом в строке
        console.log(chpok5);
        console.log("^--5--^");

       var chpok6 = chpok.split(", "); // => ["pokemon, Go"] разбивает на подстроки
         console.log(chpok6);
         console.log("^--6--^");

        var chpok7 = chpok.replace("p", "P"); // =>"pokemon, Go": замещает все вхождения подстроки
          console.log(chpok7);
          console.log("^--7--^");

         var chpok8 = chpok.toUpperCase(); // => "POKEMON, GO"
           console.log(chpok8);
           console.log("^--8--^");
      return chpok.toUpperCase();

}
   console.log(myExple("pokemon, Go")); 
   




//string conversion
(200).toString(); //number to string //"200"
(true).toString(); //boolean to string //"true"
(null).toString(); //string to string //"null"
(undefined).toString(); //number to string //"undefined"
({name : "Nishikant"}).toString(); //object to string //"[object Object]"
([1,2,3,4,5]).toString();  //array to string //"1,2,3,4,5"  

Number("200"); //string to number //200
Number("Hello"); //string to number //NaN
Number(true);


parseInt("42px"); //string to number //42
parseFloat("3.14abc"); //string to number //3.14
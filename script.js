//*Tyepe conversion
//1.Implicit conversion
result='3'+2;
console.log(result);//32
console.log(typeof result);//string

result='3'+"hello";
console.log(result);//3hello
console.log(typeof result);//string

result='3'+null;
console.log(result);//3null
console.log(typeof result);//string

result='3'+undefined;
console.log(result);//3undefined
console.log(typeof result);//stringd

result='3'+true;
console.log(result);//3true
console.log(typeof result);//string

//Basically cancatination is done in above statements.

result='3'-2;
console.log(result);//1
console.log(typeof result);//number

result='3'-"hello";
console.log(result);//NaN
console.log(typeof result);//number

result='3'-true;
console.log(result);//2 because true=1
console.log(typeof result);

result='3'-null;
console.log(result);//3
console.log(typeof result);//number

//2.Explicit conversion

// 1.String--->number
result="200";
result=Number(result);//String is converted in to number.
console.log(result);
console.log(typeof result);

// 2.Number --->string
result=200;
result=String(result);
console.log(result);
console.log(typeof result);
 
// 3.Null--->number
result=null;
result=Number(result);
console.log(result);
console.log(typeof result);

// 4.undefined---->number
result=undefined;
result=Number(result);
console.log(result);//NaN
console.log(typeof result);//number

//5.null--->string
result=null;
result=String(result);
console.log(result);
console.log(typeof result);

//6.boolean--->string
result=true;
result=String(result);
console.log(result);
console.log(typeof result);

//7.Decimal---->integer
result=20.022;
result=parseInt(result);
console.log(result);//20
console.log(typeof result);

result=-20.022;
result=parseInt(result);
console.log(result);//-20
console.log(typeof result);

result=20.022;
result=parseFloat(result);
console.log(result);
console.log(typeof result);



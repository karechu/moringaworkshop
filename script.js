let age = prompt ("How old are you");
//if age is 18 , can drive a small car
//if age is between 18 and 24 big car
//if age is above 24 truck

// if (age==18) { 
//     console.log ('you can drive a small car');
// }else if (age>18 && age<=24){
// console.log ('you can drive a big car');
// }else if (age>24){
//     console.log ('can drive a truck');
// }

function drive (age)
if (age==18) { 
    document.getElementById('log').innerHTML ='you can drive a small car'
}else if (age>18 && age<=24){
document.getElementById('log').innerHTML = 'you can drive a big car'
}else if (age>24){
  document.getElementById('log').innerHTML = 'can drive a truck'
}
else{ 
 document.getElementById('log').innerHTML = 'too young to drive'
}
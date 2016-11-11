function isAllTrue (source, filterFn) {
 var result;
  try {
       if (!source.length) {
          throw new Error('На вход подан пустой массив!');
           }
      }
  catch(e) {
       console.log(e.name + ': ' + e.message);
      }

for (var i = 0; i <source.length; i++) {
   if (!filterFn(source[i])) {
       result = false;
       break;    
   }
       else {
     result =  true;
    }
  }
return result;  
}

function isNumber(val) {

  return typeof val === 'number';

}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],i
    someNumbers = ["1", 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    arrnull = [];

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log(isAllTrue (arrnull, isNumber)); //выбросит ошибку
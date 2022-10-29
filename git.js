function calculator(str) {
  const valuerelode = str.split(' '); // идет присваивание каждой переменной  
  a = valuerelode[0];
  x = valuerelode[1];
  b = valuerelode[2];
  if (valuerelode.length > 3) {
    throw new Error() // через массив максимальное количество переменных
  } 

const arab = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
if (arab.includes (a) !== arab.includes (b)) {
    throw new Error (); // разные типы 
  } 
  if ( a < 1 || a > 10 || b < 1 || b > 10 || !a || !b) {
    throw Error() // перешли допустимые значения 
  }

  function numbr1() {  
    const numbers = new Map([
      ["", 0],
      ['I', 1],
      ['II', 2],
      ['III', 3],
      ['IV', 4],
      ['V', 5],
      ['VI', 6],
      ['VII', 7],
      ['VIII', 8],
      ['IX', 9],
      ['X', 10]
    ]);
    return (a = numbers.get(a), b = numbers.get(b));
  }
  let sum = " ";

  if ((a == 'I' || a == 'II' || a == 'III' || a == 'IV' || a == 'V' || a == 'VI' || a == 'VII' || a == 'VIII' || a == 'IX' || a == 'X') && (b == 'I' || b == 'II' || b == 'III' || b == 'IV' || b == 'V' || b == 'VI' || b == 'VII' || b == 'VIII' || b == 'IX' || b == 'X')) {
    numbr1(a, b);
    if (a < b && x == "-") {
      trans(sum = 0); // уходим от отрицательных числа
    } else {
      romancalculator(a, b);
    }
  } else if (a > 0 || b > 0) {
    arabcalculator(a, b);
  } else {
    throw Error()
  }
  function arabcalculator() {
    switch (x) {

      case '+':
        sum = Number(a) + Number(b);
        break;

      case '-':
        sum = Number(a) - Number(b);
        break;

      case '*':
        sum = Number(a) * Number(b);
        break;

      case '/':
        sum = Math.floor(Number(a) / Number(b));
        break;
      default: throw new Error()
    }
    return sum;
  }

  function romancalculator() {
    switch (x) {

      case '+':
        sum = Number(a) + Number(b);
        convertnrom(sum);
        break;

      case '-':
        sum = Number(a) - Number(b);
        convertnrom(sum);
        break;

      case '*':
        sum = Number(a) * Number(b);
        convertnrom(sum);
        break;

      case '/':
        sum = Math.floor(Number(a) / Number(b));
        convertnrom(sum);
        break;
      default: throw new Error()
    }
    return sum;

  }
  function trans() {
    const letters = new Map([
      [0, ""],
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
      [9, 'IX'],
    ]);
    return sum = letters.get(sum);
  }

  function convertnrom(){

    let b = String(Math.floor(sum / 10));

  if (b > 0) {

  switch (b) {

    case '1':
 sum = sum - 10;
 trans();
 sum = 'X' + sum;
 break;

    case '2':
 sum = sum - 20;
 trans();
 sum = 'XX' + sum;
 break;

case '3':
 sum = sum - 30;
 trans(sum);
 sum = 'XXX' + sum;
 break;

case '4':
 sum = sum - 40;
 trans(sum);
 sum = 'XL' + sum;
 break;

case '5':
 sum = sum - 50;
 trans();
 sum = 'L' + sum;
 break;

 case '6':
 sum = sum - 60;
 trans();
 sum = 'LX' + sum;
 break;

 case '7':
 sum = sum - 70;
 trans();
 sum = 'LXX' + sum;
 break;

 case '8':
 sum = sum - 80;
 trans();
 sum = 'LXXX' + sum;
 break;

 case '9':
 sum = sum - 90;
 trans();
 sum = 'XC' + sum;
 break;

 case '10':
 sum = 'C';
 break;

 default: throw new Error();
  }

  } else {
    trans(sum);
  }
    return sum;
  }


  console.log(sum);
  return String(sum);
}

calculator("5 + 5");
"use strict";
function convertToRoman(num) {
  // CALCULATE NUM LENGTH
  const numLength = num.toString().length;

  // CREATE AN ARRAY COMPOSED OF NUM DIGITS
  // Split num such as ["1","2",...]
  const split = num.toString().split("");
  // Convert value to number and push them into arr such as //[1,2,...]
  let arr = [];
  for (let i = 0; i < numLength; i++) {
    arr.push(+split[i]);
  }

  // DEFINE DEFAULT VALUE
  const _one = "I";
  const two = _one + _one;
  const three = _one + _one + _one;
  const five = "V";
  const four = _one + five;
  const six = five + _one;
  const seven = five + two;
  const eight = five + three;
  const ten = "X";
  const nine = _one + ten;
  const fifty = "L";
  const forty = ten + fifty;
  const hundred = "C";
  const ninety = ten + hundred;
  const fiveHundred = "D";
  const fourHundred = hundred + fiveHundred;
  const thousand = "M";
  const nineHundred = hundred + thousand;

  // FUNCTION THAT RETURN UNIT
  const unitFunction = function () {
    let unit;
    switch (arr[arr.length - 1]) {
      case 1:
        unit = _one;
        break;
      case 2:
        unit = two;
        break;
      case 3:
        unit = three;
        break;
      case 4:
        unit = four;
        break;
      case 5:
        unit = five;
        break;
      case 6:
        unit = six;
        break;
      case 7:
        unit = seven;
        break;
      case 8:
        unit = eight;
        break;
      case 9:
        unit = nine;
        break;
      default:
        unit = "";
    }
    return unit;
  };
  // FUNCTION THAT RETURN DOZEN
  const dozenFunction = function () {
    let dozen;
    switch (arr[arr.length - 2]) {
      case 1:
        dozen = ten;
        break;
      case 2:
        dozen = ten + ten;
        break;
      case 3:
        dozen = ten + ten + ten;
        break;
      case 4:
        dozen = forty;
        break;
      case 5:
        dozen = fifty;
        break;
      case 6:
        dozen = fifty + ten;
        break;
      case 7:
        dozen = fifty + ten + ten;
        break;
      case 8:
        dozen = fifty + ten + ten + ten;
        break;
      case 9:
        dozen = ninety;
        break;
      default:
        dozen = "";
    }
    return dozen;
  };
  // FUNCTION THAT RETURN HUNDREDS
  const hundredFunction = function () {
    let hundreds;
    switch (arr[arr.length - 3]) {
      case 1:
        hundreds = hundred;
        break;
      case 2:
        hundreds = hundred + hundred;
        break;
      case 3:
        hundreds = hundred + hundred + hundred;
        break;
      case 4:
        hundreds = fourHundred;
        break;
      case 5:
        hundreds = fiveHundred;
        break;
      case 6:
        hundreds = fiveHundred + hundred;
        break;
      case 7:
        hundreds = fiveHundred + hundred + hundred;
        break;
      case 8:
        hundreds = fiveHundred + hundred + hundred + hundred;
        break;
      case 9:
        hundreds = nineHundred;
        break;
      default:
        hundreds = "";
    }
    return hundreds;
  };
  // FUNCTION THAT RETURN THOUSANDS
  const thousandFunction = function () {
    let thousands;
    switch (arr[arr.length - 4]) {
      case 1:
        thousands = thousand;
        break;
      case 2:
        thousands = thousand + thousand;
        break;
      case 3:
        thousands = thousand + thousand + thousand;
        break;
      default:
        thousands = "";
    }
    return thousands;
  };

  // IF NUM IS ONE DIGT
  if (numLength === 1) {
    const roman = unitFunction();
    console.log(`${num} = ${roman}`);
    return roman;
  }

  // IF NUM IS TWO DIGTS
  if (numLength === 2) {
    const roman = dozenFunction() + unitFunction();
    console.log(`${num} = ${roman}`);
    return roman;
  }

  // IF NUM IS THREE DIGITS
  if (numLength === 3) {
    const roman = hundredFunction() + dozenFunction() + unitFunction();
    console.log(`${num} = ${roman}`);
    return roman;
  }

  // IF NUM IS FOUR DIGITS
  if (numLength === 4) {
    const roman =
      thousandFunction() + hundredFunction() + dozenFunction() + unitFunction();
    console.log(`${num} = ${roman}`);
    return roman;
  }
  return num;
}

convertToRoman(2);
convertToRoman(5);
convertToRoman(7);
convertToRoman(13);
convertToRoman(27);
convertToRoman(49);
convertToRoman(255);
convertToRoman(475);
convertToRoman(899);
convertToRoman(1589);
convertToRoman(2054);
convertToRoman(3999);

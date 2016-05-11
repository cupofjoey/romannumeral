//Free Code Camp Intermediate Algorithm Challenge "Roman Numeral Converter"
//Longest friggin Switch Statement Ever, but it works. Copy if you'd like to
//it's not the most elegant solution in the world, but switch statements are
//super effective for IFTTT

function convertToRoman(num) {
  var romanNum = "";
  
  var thousands = Math.floor(num / 1000);
  switch(thousands){
    case 1: 
      romanNum += "M";
      break;
    case 2: 
      romanNum += "MM";
      break;
    case 3: 
      romanNum += "MMM";
      break;
    default:
  }
  
  var remainder = num % 1000;
  
  var hundreds = Math.floor(remainder / 100);
   switch(hundreds){
    case 1: 
      romanNum += "C";
      break;
    case 2: 
      romanNum += "CC";
      break;
    case 3: 
      romanNum += "CCC";
      break;
    case 4: 
      romanNum += "CCCC";
      break;
    case 5: 
      romanNum += "D";
      break;
    case 6: 
      romanNum += "DC";
      break; 
    case 7: 
      romanNum += "DCC";
      break;
    case 8: 
      romanNum += "DCCC";
      break;
    case 9: 
      romanNum += "CM";
      break;
    default:
  }
  
  remainder = num % 100;
  
  var tens = Math.floor(remainder / 10);
   switch(tens){
    case 1: 
      romanNum += "X";
      break;
    case 2: 
      romanNum += "XX";
      break;
    case 3: 
      romanNum += "XXX";
      break;
    case 4: 
      romanNum += "XL";
      break;
    case 5: 
      romanNum += "L";
      break;
    case 6: 
      romanNum += "LX";
      break; 
    case 7: 
      romanNum += "LXX";
      break;
    case 8: 
      romanNum += "LXXX";
      break;
    case 9: 
      romanNum += "XC";
      break;
    default:
  }
  
 remainder = num % 10;
  
  var ones = remainder;
   switch(ones){
    case 1: 
      romanNum += "I";
      break;
    case 2: 
      romanNum += "II";
      break;
    case 3: 
      romanNum += "III";
      break;
    case 4: 
      romanNum += "IV";
      break;
    case 5: 
      romanNum += "V";
      break;
    case 6: 
      romanNum += "VI";
      break; 
    case 7: 
      romanNum += "VII";
      break;
    case 8: 
      romanNum += "VIII";
      break;
    case 9: 
      romanNum += "IX";
      break;
    default:
  }
  
  
 return romanNum;
}

convertToRoman(36);
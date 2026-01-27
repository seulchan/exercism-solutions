//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let ending = '';
  let splitNum = String(num).split('');
  let checkNum = String(num).length > 2 ? Number.parseInt(hello.slice(-2).join('')) : num; 

  if (checkNum !== 11 && splitNum.at(-1) === '1') {
    ending = 'st';    
  } else if (checkNum !== 12 && splitNum.at(-1) === '2') {
    ending = 'nd';    
  } else if (checkNum !== 13 && splitNum.at(-1) === '3') {
    ending = 'rd';    
  } else {
    ending = 'th';
  }

  return `${name}, you are the ${num}${ending} customer we serve today. Thank you!`;
};

import React from 'react';

function CalculateWpi(props){
let wpiVal = null;
  switch(props.value){
    case ("1"):
      wpiVal = <p> you entered one as value</p>
      break;
    case ('33'):
      wpiVal = <p> Value thirty three equals test </p>
      break;
    default:
      wpiVal = null;
  }
  return wpiVal;
}

export default CalculateWpi;

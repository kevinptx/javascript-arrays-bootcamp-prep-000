var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length-1)
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array;
}

function removeElementFromBeginningOfArray(array){
  let array = array.slice(1)
  return array;
}

funciton destructivelyRemoveElementFromEndOfArray(array){
  let array = array.pop()
  return array;
}

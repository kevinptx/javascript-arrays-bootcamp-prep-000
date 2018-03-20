let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length-1)
  return array;
}

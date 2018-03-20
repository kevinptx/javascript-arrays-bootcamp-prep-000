function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

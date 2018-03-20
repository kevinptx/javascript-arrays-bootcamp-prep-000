function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray;
}
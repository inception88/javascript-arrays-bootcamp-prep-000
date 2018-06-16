var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
=======
  return array.unshift(element)
>>>>>>> 6069abc59423f2d8a5094ed29d52dae8f1d68eb9
}

function addElementToEndOfArray(array, element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element) {
<<<<<<< HEAD
 array.push(element);
 return array
=======
 return array.push(element);
>>>>>>> 6069abc59423f2d8a5094ed29d52dae8f1d68eb9
}

function accessElementInArray(array, element) {
  return  array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift()
   return array
=======
  return array.shift()
>>>>>>> 6069abc59423f2d8a5094ed29d52dae8f1d68eb9
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop()
   return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
=======
  return array.pop()
}

>>>>>>> 6069abc59423f2d8a5094ed29d52dae8f1d68eb9

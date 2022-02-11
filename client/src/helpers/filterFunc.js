export function filteredArray(array, id ){
  const newArray = array.filter((object)=>{
    return object.id !== id
  })
  return newArray;
}
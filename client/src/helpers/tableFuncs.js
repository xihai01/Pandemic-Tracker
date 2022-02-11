export function filteredArray(array, id ){
  const newArray = array.filter((object)=>{
    return object.id !== id
  })
  return newArray;
}

export function newObject(data){
  
  return {region_name:data.region_name,region_code:data.region_code,stage_id:data.stage_id};
}

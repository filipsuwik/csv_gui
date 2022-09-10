

 function findPattern(obj,pattern) {

    let values = Object.values(obj)
    values = values.join('_')
    const found = values.match(pattern)

   return found?true:false
}  
export default findPattern

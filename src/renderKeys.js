const Keys = (obj) => {

    if(obj){
        Object.keys(obj).map(el =>(
            <td>{el}</td>
         )
            
         )

    } else{return null}
    
}

export default Keys
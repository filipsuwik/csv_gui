import React from "react"
import tableStyle from "./css"

const SearchTable = (props)=> {
    console.log(props.result)
    
    return(
    <table style={tableStyle}>
    <tbody>
    <tr>
    
    {Object.values(props.keys).map(el =>(
       <td>{el}</td>
    )
       
    )}
    </tr>
       
       
     { props.result.map(el => (
        <tr>
        {el.map(obj =>(
             <td>{obj}</td>))}
       
           
               
           </tr> 
       )
     )
    }   
</tbody>
    </table>
    )

}

export default SearchTable
import React from "react";
import tableStyle from "./css.js"
const FileTable = (props)=> {


    
        return (

    <div>
<table style={tableStyle}>
         <tbody>
         <tr>
       
         </tr>


         
{ props.mapped.map(el => (<tr >
                {Object.values(el).map(ob => (
                    <td>{ob}</td>
                )

                )}
            </tr> 
        
      )
      )
        }
        
         </tbody>
         </table>
</div>

    )
    
}


export default FileTable
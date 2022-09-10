import React, {useState} from "react";
import handleFiles from "./handleFile";
import Input2 from "./Input2";
import tableStyle from "./css";
import findPattern from "./findPattern";





 const Input = () => {
    
    const [selectedFile, setSelectedFile] = useState([{}]);
  


  // console.log(selectedFile)
  


   

    

    const keys = selectedFile.shift()
    let mapped =  selectedFile.map(el =>{
        return Object.values(el)
    })

   

  
   

    return(
        
        <div>
        
            <form>
        <input
          type="file"
          filename={'file'}
          onChange={(e) => {
       
        if(!e.target.files){return}
        e.target.files[0].text().then((result)=>{setSelectedFile(handleFiles(result))}); 

  







            
          }
        }
        />

      </form>
     <Input2 selectedFile={selectedFile}/>
         <table style={tableStyle}>
         <tbody>

         <tr>
         
         {Object.keys(keys).map(el =>(
            <td>{el}</td>
         )
            
         )}
         </tr>
            
            
          { mapped.map(el => (
            
                <tr>
                    {el.map(ob => (
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

export default Input
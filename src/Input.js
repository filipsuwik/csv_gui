import React, {useState} from "react";
import handleFiles from "./handleFile";
import Input2 from "./Input2";
import FileTable from "./FileTable";







 const Input = () => {
    
    const [selectedFile, setSelectedFile] = useState([{}]);
  
    const keys = () =>{
        let arr = selectedFile.map(el=>{
        return Object.keys(el)
    })
    return arr[0]}

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

      <Input2 selectedFile={selectedFile} keys={keys}/>
      
      <FileTable mapped={mapped} keys={keys}/>
     
         
        

         
        </div>
        
      
    )

 }

export default Input
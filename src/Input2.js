import React, {useState} from "react";
import findPattern from "./findPattern";
import tableStyle from "./css";
import Keys from "./renderKeys";
const Input2 = ({selectedFile}) => {


    const [formData,setFormData] = useState({text:''})
    const [searchResult, setSearchresult] = useState([])
    
    let result = []
    const handleSubmit = (event) => {
        event.preventDefault();
    
        selectedFile.forEach(element => {
            if(findPattern(element,formData.text)==true){
                result.push(element)
            }
           
        });
        
       

       
       
    
        
        setSearchresult(result)
        }
       
       
   
       
   


    


    return(
        <div>
        <form onSubmit={(event)=> {handleSubmit(event)}}>

    <input type="text"
           name="text"
           
           onChange={(event) =>{
            setFormData({...formData,
            text: event.target.value}); 
           
          

        }}
        value={formData.text}/>
    
    <button type="submit">search</button>
  </form>
<div>
<table style={tableStyle}>
         <tbody>
         <tr>
   
         
         </tr>

         { searchResult.map(el => (
            
            <tr >
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


</div>
    )
    

}

export default Input2
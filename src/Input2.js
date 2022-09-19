import React, {useState} from "react";
import findPattern from "./findPattern";
import SearchTable from "./SearchTable";
import Calendar from "./Calendar";

const Input2 = ({selectedFile,keys}) => {

    const [formData,setFormData] = useState({text:''})
    const [searchResult, setSearchresult] = useState([])
   
    let result = []
    //set submit value as a state o0bject
    const handleSubmit = (event) => {
        event.preventDefault();
    
        selectedFile.forEach(element => {
            if(findPattern(element,formData.text)==true){
                result.push(Object.values(element))
            }
           
        });
    
        setSearchresult(result)
        }
    //console.log(searchResult)
        if(!selectedFile[0]&&formData.text===''){console.log('file not loaded')} else {

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
  <SearchTable result={searchResult} keys={keys()}/>
  <Calendar result={searchResult}/>

</div>
    )
        
        }

    

}

export default Input2
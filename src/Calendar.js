import React, {useState, useEffect} from "react";


const Calendar = (props) => {
    

let lastYear = []
let today = new Date()
let yearAgo = today.setDate(-365)
yearAgo = new Date(yearAgo)

for(let i =0; i <= 180; i++){
    let date = new Date()
    let  day = date.getDate()
    date = date.setDate(day-i)
    date = new Date(date)
    
    
    lastYear.push(date)
}

function formatDate(date){
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()

    if(month<10&&day>9){
        return `${day}/0${month}/${year}`}
        else if(month>9&&day>9){return `${day}/${month}/${year}`} 
        else{return `0${day}/${month}/${year}`}

}


function findDate(arr,date){
    return arr.includes(date)
}


if(props.result[0]){
   
    return(
        <div style={{display:"flex",flexFlow:"wrap",gap:"0.2em", justifyContent:"center"}}>
            
       {lastYear.map((el)=>{
       
        return (<div style={{ textAlign:"left", border:"solid 1px", padding:"1em",minWidth:"11%"}}>
        <details>
        <summary> 
        {el.toLocaleDateString()} 
        </summary>
        
        {props.result.map((row)=>{
            if(findDate(row,el.toLocaleDateString())==true){
                return (
                    <ul>
                    {row.map((p)=>{return <li>{p}</li>})}
                    </ul>
                    )
                    }
                    }
                    )
        }

        
        
       
        </details>

       </div>
       )
       }
       )
       }
        </div>
       )
       }
    }
export default Calendar


function handleFiles(str) {

 

    str = str.split("\n"); /*creating array of strings from csv rows*/
    let arrayOfObjects = [];

    let arr = [];
    str[0] = str[0].replaceAll(' ','')
 
    str.forEach((element) => {
      arr.push(element.split(","));
    });

    
    csvToObject();

    function csvToObject() {
      arr.forEach((element) => {
        let row = {};
        let el = element;
       

        for (let i = 0; i < arr[0].length; i++) {
          let entries = new Map();

          entries.set(arr[0][i], element[i]);
         
          entries = Object.fromEntries(entries);
         

          row = Object.assign(row, entries);
        }

        arrayOfObjects.push(row);
      });

     
    }

    return arrayOfObjects
    
  };
 


export default handleFiles

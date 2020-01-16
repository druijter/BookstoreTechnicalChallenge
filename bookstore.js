 
 console.log("SDS")
 
 
 //Fetch the data from the Propublica website//
 
 
 let url = "https://api.myjson.com/bins/zyv02"
 

    
    fetch(url)
        .then(response => response.json()
        
        )
          
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => console.log(error))
       
    
    


console.log(fetch(url))

 let url = "https://api.myjson.com/bins/zyv02"


 const app = new Vue({
     el: "#app",
     data: {
         bookData: [],
         bookURL: {
             bookURLrow: [],
        //      titlerow: [],
        //      descriptionrow: [],
        //      languagerow: [],
     

         },

        
       

     },
     created() {
         this.fetchData(url)
     },

     methods: {
         showBook() {
             let bookURLrow = []
            //  let titlerow = []
            //  let descriptionrow = []
            //  let languagerow = []
             let bookData = this.bookData
             
             let bookLink = bookData.books
             console.log(bookLink[0].cover)

             for (i = 0; i < bookLink.length; i++) {


                 bookURLrow.push(bookLink[i].cover)
                //   titlerow.push(bookLink[i].title)
                //   descriptionrow.push(bookLink[i].description)
                //   languagerow.push(bookLink[i].language)
                //   console.log(bookLink[i].description)
        
             }


             this.bookURL.bookURLrow = bookURLrow
             console.log(bookURLrow)
             
            //  this.titlerow = titlerow
    
            //  this.descriptionrow = descriptionrow
          
            //  this.languagerow = languagerow
     


         },


         // //Fetch the data from the Propublica website//
         async fetchData(url) {

             this.bookData = await fetch(url, {
                     method: 'GET',

                 })
                 .then(response => response.json()

                 )

                 .then(data => {
                     return data
                 })
                 .catch(error => console.log(error))
             this.showBook()
         }
     }

 })
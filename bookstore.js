 console.log("SDS")


 //Fetch the data from the Propublica website//


 let url = "https://api.myjson.com/bins/zyv02"



 //  fetch(url)
 //      .then(response => response.json()

 //      )

 //      .then(data => {
 //          console.log(data)
 //          return data
 //      })
 //      .catch(error => console.log(error))

 //setting up a VUE app//

 const app = new Vue({
     el: "#app",
     data: {
         bookData: [],
         bookURL: {        
         bookURLrow1: [],
         bookURLrow2: [],
         bookURLrow3: [],
         }

     },
     created() {
         this.fetchData(url)
     },

     methods: {
         showBook() {
             let bookURLrow1 = []
             let bookURLrow2 = []
             let bookURLrow3 = []

             let bookData = this.bookData

             let bookLink = bookData.books

             for (i = 0; i < bookLink.length; i++) {

                if (i<8){
                 bookURLrow1   .push(bookLink[i].cover)
                }

             if(i>8 && i <17) {
                bookURLrow2.push(bookLink[i].cover)
             }
             if(i>16 && i <25) {


                 bookURLrow3.push(bookLink[i].cover)
             }
             }
             console.log(bookURLrow2)

             this.bookURL.bookURLrow1 = bookURLrow1
             this.bookURL.bookURLrow2 = bookURLrow2
             this.bookURL.bookURLrow3 = bookURLrow3

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
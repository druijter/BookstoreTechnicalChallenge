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
             titlerow1: [],
         titlerow2: [],
         titlerow3: [],

         },
         
         descriptionrow1: [],
         descriptionrow2: [],
         descriptionrow3: [],
         languagerow1: [],
         languagerow2: [],
         languagerow3: [],

     },
     created() {
         this.fetchData(url)
     },

     methods: {
         showBook() {
             let bookURLrow1 = []
             let bookURLrow2 = []
             let bookURLrow3 = []

             let titlerow1 = []
             let titlerow2 = []
             let titlerow3 = []

             let descriptionrow1 = []
             let descriptionrow2 = []
             let descriptionrow3 = []
             let languagerow1 =[]
             let languagerow2 = []
             let languagerow3 = []

             let bookData = this.bookData

             let bookLink = bookData.books

             for (i = 0; i < bookLink.length; i++) {
                
                 if (i < 8) {
                     bookURLrow1.push(bookLink[i].cover)
                     titlerow1.push(bookLink[i].title)
                     descriptionrow1.push(bookLink[i].description)
                     languagerow1.push(bookLink[i].language)
                     console.log(bookLink[i].description)
                 }

                 if (i > 7 && i < 16) {
                     bookURLrow2.push(bookLink[i].cover)
                     titlerow2.push(bookLink[i].title)
                     descriptionrow2.push(bookLink[i].description)
                     languagerow2.push(bookLink[i].language)
                 }
                 if (i > 15 && i < 25) {


                     bookURLrow3.push(bookLink[i].cover)
                     titlerow3.push(bookLink[i].title)
                     descriptionrow3.push(bookLink[i].description)
                     languagerow3.push(bookLink[i].language)
                 }
             }
             

             this.bookURL.bookURLrow1 = bookURLrow1
             this.bookURL.bookURLrow2 = bookURLrow2
             this.bookURL.bookURLrow3 = bookURLrow3
            this.titlerow1 = titlerow1
             this.titlerow2 = titlerow2
             this.titlerow3 = titlerow3
            this.descriptionrow1 = descriptionrow1
             this.descriptionrow1 = descriptionrow1
             this.descriptionrow1 = descriptionrow1
            this.languagerow1 = languagerow1
             this.languagerow2 = languagerow2
             this.languagerow3 = languagerow3


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
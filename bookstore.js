let url = "https://api.myjson.com/bins/zyv02"


const app = new Vue({
            el: "#app",
            data: {
                bookData: [],
                bookDataNotFetched: [],
                message: "",
                bookURL: {
                    bookURLrow: [],
                },
            },

            // computed(){
                
            // },

            created() {
               
                this.fetchData(url)

            },


            methods: {
            

                searchFunction() {

                    let bookData = this.bookData
                    let bookDataNotFetched = []
                    let bookDataFiltered = this.bookData
                    console.log(bookDataFiltered)




                    for (i = 0; i < bookDataFiltered.books.length; i++) {

                        console.log("hi")

                        console.log(this.message == bookDataFiltered.books[i].title)

                        if (this.message == bookDataFiltered.books[i].title) {
                            console.log("sdsdssdsdsd")
                            bookDataNotFetched = {books: bookDataFiltered.books[i]}
                            
                            console.log(i)
                            console.log(bookDataNotFetched)
                            console.log(bookData)

                        } 
                        


                    }
                    console.log(bookDataNotFetched)
                          this.bookDataNotFetched = bookDataNotFetched
                         

                   

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
                            this.bookDataNotFetched = this.bookData
                        
                        // this.showBook()

                    }
                }

            })
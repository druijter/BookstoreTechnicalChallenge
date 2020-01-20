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

                    let bookData = this.bookData.books
                    let bookDataNotFetched = []
                    bookDataNotFetched.books = []
                    let bookDataFiltered = this.bookData.books
                    
                    // console.log(bookDataFiltered)




                    for (i = 0; i < bookDataFiltered.length; i++) {

                        // console.log("hi")
                        // '==' exact match. consider using .includes()
                        // console.log(this.message == bookDataFiltered.books[i].title)

                        //check for includes rather than match, and adjust to be non-case-sensitive
                        if (this.message == bookDataFiltered[i].title) {
                            // console.log("sdsdssdsdsd")

                            //change to be a push method
                            bookDataNotFetched.books.push(bookDataFiltered[i])
                            // console.log('bookDataNotFetched: ', bookDataNotFetched)
                            
                            // // console.log(i)
                            // console.log(bookDataNotFetched)
                            // console.log(bookData)

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
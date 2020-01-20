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

                        if (this.message == bookDataFiltered.books[i].title) {
                            bookDataNotFetched.push(bookDataFiltered.books[i])
                            console.log(bookDataFiltered.books[i])

                        } 
                        


                    }
                    console.log(bookDataNotFetched)
                          this.bookDataNotFetched = bookDataNotFetched
                          console.log(this.bookDataNotFetched[0])

                   

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
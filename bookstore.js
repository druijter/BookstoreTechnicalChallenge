let url = "https://api.myjson.com/bins/zyv02"


const app = new Vue({
    el: "#app",
    data: {
        bookData: [],
        bookDataFiltered: [],
        message: "",
        bookURL: {
            bookURLrow: [],
        },
    },

    computed: {
        compareMessage() {
            console.log(this.message === "")
        }


    },

    created() {
        this.fetchData(url)
    },


    methods: {


        searchFunction() {

            let bookData = this.bookData.books
            let bookDataFiltered = []
            bookDataFiltered.books = []
            let bookDataCompareVariable = this.bookData.books

            // console.log(bookDataCompareVariable)




            for (i = 0; i < bookDataCompareVariable.length; i++) {

                //check for includes rather than match, and adjust to be non-case-sensitive
                if (bookDataCompareVariable[i].title.toUpperCase().includes(this.message.toUpperCase()) || bookDataCompareVariable[i].description.toUpperCase().includes(this.message.toUpperCase()) || bookDataCompareVariable[i].language.toUpperCase().includes(this.message.toUpperCase())) {


                    //change to be a push method
                    bookDataFiltered.books.push(bookDataCompareVariable[i])


                }
                console.log(this.message === "")


                if (this.message === "") {
                    this.bookDataFiltered = this.bookData
                }

            }

            this.bookDataFiltered = bookDataFiltered




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
            this.bookDataFiltered = this.bookData

        }
    }

})
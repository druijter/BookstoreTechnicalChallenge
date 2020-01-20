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

                //check for includes rather than match, and adjust to be non-case-sensitive
                if (bookDataFiltered[i].title.toUpperCase().includes(this.message.toUpperCase()) || bookDataFiltered[i].description.toUpperCase().includes(this.message.toUpperCase()) || bookDataFiltered[i].language.toUpperCase().includes(this.message.toUpperCase())) {


                    //change to be a push method
                    bookDataNotFetched.books.push(bookDataFiltered[i])


                }



            }

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
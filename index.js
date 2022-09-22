class Book {
    constructor(
        title,
        numPages,
        author,
        publisher,
        ISBN,
        datePublished,
        image
    )
    {
        this.title = title;
        this.numPages = numPages;
        this.author = author;
        this.publisher = publisher;
        this.ISBN = ISBN;
        this.datePublished = datePublished;
        this.image = image;
    }
    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let elapsed = now - published;
        let totalDays = Math.floor(elapsed / (1000 * 3600 * 24));
        let years = Math.floor(totalDays / 365);
        let months = Math.floor(((totalDays % 365) / 30));
        let days = (totalDays % 365) - (months * 30);
        let output = "This book was published " + years + " years " + months + " months " + "and " + days + " days ago";
        //console.log("This book was published ", years, " years ", months, " months ", "and ", days, " days ago");
        return output;
    }
}
export default Book;
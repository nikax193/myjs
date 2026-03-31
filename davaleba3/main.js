// 1. ინვენტარის შექმნა
const books = [
    { title: "დიდოსტატის მარჯვენა", author: "კონსტანტინე გამსახურდია", price: 25 },
    { title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", price: 30 },
    { title: "ალქიმიკოსი", author: "პაულო კოელიო", price: 15 }
];

console.log("საწყისი ინვენტარი:", books);

// 2. ახალი წიგნის ჩამატება (დაამატეთ თქვენთვის სასურველი წიგნი)
books.push({title: "გველის მჭამელი (პოემა)", author: "ვაჟა ფშაველა", price: 10 });
console.log("განახლებული ინვენტარი:", books);


// 3. წიგნის მოძებნა (მოძებნეთ "ვეფხისტყაოსანი")
const searchedBook = books.find(book => book.title === "ვეფხისტყაოსანი");
console.log("ნაპოვნი წიგნი:", searchedBook);


// 4. იაფი წიგნების გაფილტვრა (ფასი < 20)
const cheapBooks = books.filter(book => book.price < 20);
console.log("იაფი წიგნები:", cheapBooks);



// 5. 10%-იანი ფასდაკლება ყველა წიგნზე
// მინიშნება: map-ის შიგნით დააბრუნეთ ახალი ობიექტი შეცვლილი ფასით
const discountedBooks = books.map(book => {
    return { ...book,
        price: book.price * 0.9
     };
});
console.log("ფასდაკლებული წიგნები:", discountedBooks);


// 6. სორტირება ფასის ზრდადობით
books.sort((a, b) => a.price - b.price);
console.log("სორტირებული წიგნები:", books);
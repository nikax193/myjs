// 1. ვირჩევთ ფორმას და ინფუთებს HTML-დან
const orderForm = document.querySelector('#orderForm');
const typeInput = document.querySelector('#coffeeType');
const quantityInput = document.querySelector('#quantity');

// 2. ვამატებთ მოვლენის მსმენელს ფორმაზე
orderForm.addEventListener('submit', function(e) {
            
    // TODO 1: გააჩერეთ გვერდის გადატვირთვა
    e.preventDefault();

    // TODO 2: მიიღეთ მნიშვნელობები (value) ინფუთებიდან და შეინახეთ ცვლადებში
    // მინიშნება: რაოდენობა სასურველია გადააქციოთ რიცხვად (Number ან parseInt)
    const coffeeType = typeInput.value;
    const quantity = Number(quantityInput.value);

    // TODO 3: ვალიდაცია (if/else) - შეამოწმეთ არის თუ არა რაოდენობა > 0-ზე.
    // თუ არაა, გამოიძახეთ alert() და გააჩერეთ ფუნქცია.
    if (quantity <= 0) {
        alert("შეიყვანეთ მონაცემები სწორად!");
        return;
    }

    // TODO 4: შექმენით ცვლადი ფასისთვის და გამოიყენეთ switch მის დასადგენად
    let price;

    switch (coffeeType) {
        case "espresso":
            price = 3;
            break;
        case "latte":
            price = 5;
            break;
        case "cappuccino": 
            price = 4;
            break;
        default: 
            price = 0;
    }

    // TODO 5: for ციკლით კონსოლში დაბეჭდეთ ყავის მომზადების პროცესი
    // (მაგ: "ვამზადებთ 1 ჭიქა ესპრესოს...")
    for(let i = 1; i <= quantity; i++) {
        console.log(`ვამზადებთ ${i} ჭიქა ${coffeeType}... `);
    }
            
    // TODO 6: გამოთვალეთ სრული ჯამი და დაბეჭდეთ console.log-ში
    const total = price * quantity;
    console.log(`სულ გადასახდელია: ${total} ლარი`);
            
            
    // დამატებითი: წარმატების შემდეგ გავასუფთაოთ რაოდენობის ველი
    quantityInput.value = "";
});
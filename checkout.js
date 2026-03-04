// პრაქტიკული დავალება #1: ონლაინ მაღაზიის კალკულატორი

const itemPrice = 50;
let itemQuantity = 3;
const isVipCustomer = true;
const hasPromoCode = false;

// 2. ფუნქციის შექმნა (შეავსეთ ლოგიკა)
const calculateCheckout = (price, qty, vip, promo) => {
    
    // 3. შუალედური ჯამის გამოთვლა
    const subtotal = price * qty;
    // console.log("jami:>",subtotal)

    // 4. ფასდაკლების ლოგიკა (Ternary + ლოგიკური ოპერატორები)
    const discountAmount = (vip || promo) ? subtotal * 0.20 : 0;
    // console.log("fasdalkleba:>",discountAmount)


    
    // 5. საბოლოო თანხის გამოთვლა
    const totalAmount = subtotal - discountAmount;

    // 6. ბონუს დავალება (კენტობის შემოწმება & 1 ოპერატორით)
    if (qty & 1) {
        console.log("გილოცავთ! თქვენ გადმოგეცემათ მაღაზიის სასაჩუქრე სტიკერი.");
    }

    // 7. მონაცემების გამოტანა (console.log და alert)
    console.log("--- ქვითარი ---");
    console.log(`რაოდენობა: ${qty}`);
    console.log(`შუალედური ჯამი: ${subtotal}₾`);
    console.log(`ფასდაკლება: ${discountAmount}₾`);
    console.log(`სულ გადასახდელი: ${totalAmount}₾`);
    console.log("----------------")

    alert(`საბოლოო გადასახდელი თანხა: ${totalAmount}₾`);
};

// ფუნქციის გამოძახება
calculateCheckout(itemPrice, itemQuantity, isVipCustomer, hasPromoCode);


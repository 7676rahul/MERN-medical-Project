let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Ayushman Bharath',
        image: '1.jpeg',
        price: 500000
    },
    {
        id: 2,
        name: 'Rashtriya Swasthya Bima Yojana',
        image: '2.png',
        price: 500000
    },
    {
        id: 3,
        name: 'Awaz health insurance scheme',
        image: '3.jpeg',
        price: 250000
    },
    {
        id: 4,
        name: 'Karunya health scheme',
        image: '4.jpeg',
        price: 150000
    }
    // {
    //     id: 5,
    //     name: 'Gobi',
    //     image: '',
    //     price: 45
    // },
    // {
    //     id: 6,
    //     name: 'Buns',
    //     image: '',
    //     price: 30
    // }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Benefit upto ₹${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Know more</button>`;
            
        list.appendChild(newDiv);
    })
}
initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     // reloadCard();
// }
function addToCard(key){
    if(key ==0){
        window.location.href='https://ayushmanup.in/pages.aspx?pt=photo-gallery';

        if(key==1){
            window.location.href='https://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana';
        }
    }
}
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
var products = [{
    name: "Red Rose",
    image: "https://cdn.pixabay.com/photo/2019/06/28/13/00/red-rose-4304139_960_720.jpg",
    price: 2.90,
    qtty: 1
}, {
    name: "White Rose",
    image: "https://cdn.vox-cdn.com/thumbor/s6o0oNP74eOgSncfahbejN-uh9c=/0x0:5511x3640/1200x800/filters:focal(3063x791:3943x1671)/cdn.vox-cdn.com/uploads/chorus_image/image/58470249/492767389.jpg.0.jpg",
    price: 3.90,
    qtty: 1
}, {
    name: "Black Rose",
    image: "https://f4.bcbits.com/img/a0067115926_16.jpg",
    price: 9.90,
    qtty: 1
}];

// function rabatt() {
//     var pri = $ { products.price };
//     var neuePreis = pri * 0.90;
//     document.getElementById("total").innerHTML = neuePreis.toFixed(2);
// }
// // console.log(rabatt())



for (let val of products) {
    document.getElementById("products").innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class ="product-title h3 m-3">${val.name}</p>
    <img class ="product-image" src="${val.image}" width="200"  height="200">
    <div class="product-details" >
        <p class="product-price h4 m-3">${ val.price.toFixed(2)} €</p>
        <button class="btn btn-primary product-button"  type="button">ADD  TO CART</button>
    </div>
    </div>
    `
}

//toFixed is a built in function from js
// same as mathRandom or splice for example, different purposes
//all of them are built in functions. They "live" in the js libraries

var cart = [];


function addToCart(product) {
    if (cart.length == 0) {
        cart.push(product);
    } else if (cart.find((val) => val.name == product.name)) {
        product.qtty++;
    } else {
        cart.push(product);
    }
    createRow();
    total();
}

var buttons = document.getElementsByClassName("product-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // movies[i].likes++;
        // document.getElementsByClassName("product-title")[i].innerHTML = movies[i].likes;
        addToCart(products[i]);
    })
}

function createRow() {
    document.getElementById("cart-items").innerHTML = "";
    for (let val of cart) {

        document.getElementById("cart-items").innerHTML += `

    <div class="cart-row row d-flex">

        <div class="cart-item col-6 my-3 ">
            <img class="cart-item-image" src="${val.image}" width="100" height="100">
            <span class="cart-item-title h5 ">${val.name}</span>
        </div>

        <span class="cart-price col-3 h4 my-3">${val.price} €</span>

        <div class="cart-qtty-action col-3 d-flex">            
            <i class="minus fa fa-minus-circle my-auto" ></i>            
            <div class="cart-quantity p-4 h4">${val.qtty}</div>            
            <i class="plus fa fa-plus-circle my-auto"></i>        
            <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
        </div>

    </div>
    `;
    }

    let plus = document.getElementsByClassName("plus");
    let minus = document.getElementsByClassName("minus");
    let del = document.getElementsByClassName("del");

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function() {
            plusQtty(i);
            total();
        })

        del[i].addEventListener("click", function() {
            deleteItem(i);
            total();
        })

        minus[i].addEventListener("click", function() {
            minusQtty(i);
            total();
        })
    }
}

function total() {
    let total = 0;
    for (let val of cart) {
        total = total + (val.price * val.qtty);

        // if (total > 10) {
        //     total = total * 0.90
        // } else { }

        // total = 0 + (3200 * 3); 
        // total = 9600 + (2100 * 4)
    }
    document.getElementById("price").innerHTML = total.toFixed(2) + "€";
}

function plusQtty(index) {
    cart[index].qtty++; // 2
    document.getElementsByClassName("cart-quantity")[index].innerHTML = cart[index].qtty; // 2
}

function minusQtty(i) {
    if (cart[i].qtty == 1) {
        cart.splice(i, 1);
        // console.table(cart);
        createRow();
    } else {
        cart[i].qtty--;
        document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
    }
}

function deleteItem(i) {
    cart[i].qtty = 1;
    cart.splice(i, 1);
    createRow();
}
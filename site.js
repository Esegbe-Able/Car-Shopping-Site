const data = [
  {
    id: "0",
    img: "/images/2022_honda_civic_sedan_touring_pr_evox_1_815x543.webp",
    name: "2022 Honda Civic Sedan Touring",
    price: 33880,
    save: 300,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "1",
    img: "images/mercedes-benz-mercedes-benz-g63-black-car-car-mercedes-benz-g-class-hd-wallpaper-preview.jpg",
    name: "Mercedes Benz g-class g63-black",
    price: 160000,
    save: 150,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "2",
    img: "/images/2021_honda_accord_sedan_sport-special-edition_tds_evox_4_815.webp",
    name: "Honda Accord Sedan sport special Edition",
    price: 29428,
    save: 200,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "3",
    img: "/images/mustang-ford-shelby-gt500-2020-hd-wallpaper-preview.jpg",
    name: "Ford mustang shelby-gt500-2020",
    price: 73995,
    save: 500,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "4",
    img: "/images/ford-ford-mustang-gt-ford-mustang-gt-apollo-edition-ford-mustang-wallpaper-preview.jpg",
    name: "Ford Mustang-gt-apollo Edition",
    price: 230000,
    save: 140,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "5",
    img: "images\ford-f-150-raptor-pickup-trucks-car.jpg",
    name: "Ford f-150 Raptor Pickup Truck",
    price: 72005,
    save: 130,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "6",
    img: "images\ford ranger 2022.jpg",
    name: "Ford Ranger 2022",
    price: 41650,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "7",
    img: "imagesmustang-ford-shelby-gt500-2020-hd-wallpaper-preview.jpg",
    name: "Ford mustang shelby-gt500-2020",
    price: 230000,
    save: 140,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "8",
    img: "imagesc-class-mercedes-benz-wallpaper-preview.jpg",
    name: "Mercedes Benz c-class 2021 Edition",
    price: 56000,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "9",
    img: "imagesmercedes-benz-mercedes-benz-g63-black-car-car-mercedes-benz-g-class-hd-wallpaper-preview.jpg",
    name: "Mercedes Benz g-class g63-black",
    price: 160000,
    save: 400,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "10",
    img: "imagesMercedes Benz s-class.jpg",
    name: "Mercedes Benz s-class 2022 Edition",
    price: 111100,
    save: 350,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "11",
    img: "images\2022_mercedes-benz_c-class_coupe_c-300-4matic_fq_oem_1_815.webp",
    name: "Mercedes Benz c-300 4matic",
    price: 44600,
    save: 150,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "12",
    img: "images\2021_honda_accord_sedan_sport-special-edition_tds_evox_4_815.webp",
    name: "Honda Accord Sedan Sport 2021 Special Edition",
    price: 28920,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "13",
    img: "images\2022_honda_civic_sedan_touring_pr_evox_1_815x543.webp",
    name: "Honda Accord Sedan Sport 2021 Special Edition",
    price: 29150,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "14",
    img: "images\black-honda-accord-wallpaper-preview.jpg",
    name: "Honda Accord 2020 black",
    price: 26534,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "15",
    img: "images\2023_honda_cr-v_4dr-suv_sport-touring-hybrid_fq_oem_2_815.jpg",
    name: "Honda Accord 2020 black",
    price: 32355,
    save: 100,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "16",
    img: "imagesBMW XI diesel.jpg",
    name: "BMW XI Diesel",
    price: 33775,
    save: 200,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "17",
    img: "imagesBWM M4 Coupe.jpg",
    name: "BMW M4 Coupe",
    price: 74700,
    save: 300,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "18",
    img: "imagesautumn-bmw-bmw-car-bmw-4-series-hd-wallpaper-preview.jpg",
    name: "BMW series 4",
    price: 54200,
    save: 380,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
  {
    id: "19",
    img: "images\bmw-3-series-wallpaper-preview.jpg",
    name: "BMW Series 3",
    price: 41450,
    save: 380,
    delivery: "In 3 - 4 days",
    itemInCart: false,
  },
];

let cartList = []; //array to store cart list
var i;

var detail = document.getElementsByClassName("card-item");
var detailsImg = document.getElementById("details-img");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");
var youSave = document.getElementById("you-save");
var detailsPage = document.getElementById("details-page");
var back = document.getElementById("back");

back.addEventListener("click", refreshPage); //click events to back to home page

var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("cart");

cart.addEventListener("click", displayCart); //Click events to display cart

var carts = document.getElementById("carts");

carts.addEventListener("click", () => addToCart(getId)); //Click events to add item to cart from details page
var getId;
var home = document.getElementById("logo");
home.addEventListener("click", hideCart); //click event to hide cart page and return page

//click events on dynamicaly created elements to remove items from the list
document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}

// Click events to add items to the cart from home
addToCarts.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);

//detail function
function handleDetail() {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = data[getId].img;
  detailTitle.innerHTML = data[getId].name;
  detailPrice.innerHTML = "price : $ " + data[getId].price;
  youSave.innerHTML = "You save : ($ " + data[getId].save + ")";
}

//function to display cart page
function displayCart() {
  document.getElementById("main").style.display = "none";
  document.getElementById("details-page").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("cart-with-items").style.display = "block";
    document.getElementById("empty-cart").style.display = "none";
  }
}

//add item to the cart
function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();

    alert("Car has been added to your orders");
  } else {
    alert("Your Car is already there");
  }
  data[id].itemInCart = true;
}

var totalAmount;
var totalItems;
var totalSavings;

//add item to cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;
  totalSavings = 0;
  var clrNode = document.getElementById("item-body");
  clrNode.innerHTML = "";
  cartList.map((cart) => {
    var cartCount = document.getElementById("item-body");
    totalAmount = totalAmount + cart.price;
    totalSavings = totalSavings + cart.save;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("class", "list-name");
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    var listQuantity = document.createElement("h3");
    listQuantity.setAttribute("class", "quantity");
    listQuantity.innerHTML = "1";
    tempCart.appendChild(listQuantity);

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCount.appendChild(tempCart);
  });
  document.getElementById("total-amount").innerHTML =
    "Total Amount : $" + totalAmount;
  document.getElementById("total-items").innerHTML =
    " Total Items : $ " + totalItems;
  document.getElementById("you-saved").innerHTML =
    "You Saved : $" + totalSavings;
  document.getElementById("total").style.display = "block";
}

//hide your cart or order page
function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

//back to home page from details page
function refreshPage() {
  detailsPage.style.display = "none";
}

//remove item from the cart
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("card-width-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}

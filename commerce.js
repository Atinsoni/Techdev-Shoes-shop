const wrapper =document.querySelector(".sliderwrapper");
const menuitems=document.querySelectorAll(".menuitem");

const products=[
    {
        id:1,
        title: "Air Force",
        price: "Rs50000",
        colors: [
            {
                code: "black",
                img: "image/air.png",
            },
            {
                code: "darkblue",
                img: "image/air2.png",
            },
        ],
    },
    {
        id:2,
        title: "Air Jordan",
        price: "80000",
        colors: [
            {
                code: "lightgray",
                img: "image/jordan.png",
            },
            {
                code: "green",
                img: "image/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title: "Blazer",
        price: "70000",
        colors: [
            {
                code: "lightgray",
                img: "image/blazer.png",
            },
            {
                code: "green",
                img: "image/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title: "Crater",
        price: "40000",
        colors: [
            {
                code: "black",
                img: "image/crater.png",
            },
            {
                code: "lightgray",
                img: "image/crater2.png",
            },
        ],
    },
    {
        id:5,
        title: "Hippie",
        price: "45000",
        colors: [
            {
                code: "gray",
                img: "image/hippie.png",
            },
            {
                code: "black",
                img: "image/hippie2.png",
            },
        ],
    },
];

let choosenproduct=products[0]

const currentproductimg=document.querySelector(".productimg");
const currentproducttitle=document.querySelector(".producttitle");
const currentproductprice=document.querySelector(".productprice");
const currentproductcolors=document.querySelectorAll(".color");
const currentproductsizes=document.querySelectorAll(".size");

menuitems.forEach((item, index)=>{
    item.addEventListener("click",() =>{
        wrapper.style.transform=`translate(${-100 * index}vw)`;
       
        choosenproduct=products[index];

        currentproducttitle.textContent=choosenproduct.title;
        currentproductprice.textContent="Rs" + choosenproduct.price;
        currentproductimg.src=choosenproduct.colors[0].img;

        currentproductcolors.forEach((color, index)=>{
            color.style.backgroundColor=choosenproduct.colors[index].code;
        });
    });
});

currentproductcolors.forEach((color, index)=> {
    color.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colors[index].img;
    });
});

currentproductsizes.forEach((size, index)=> {
    size.addEventListener("click",()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productbutton.addEventListener("click", ()=>{
    payment.style.display="flex";
});
close.addEventListener("click", ()=>{
    payment.style.display="none";
});
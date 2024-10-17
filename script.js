const data=[
    {
        id:1,
        name:"Mathey Tissot Stainless Steel Swiss",
        img:"https://m.media-amazon.com/images/I/71B+Fk+ut2L._AC_UL480_FMwebp_QL65_.jpg",
        price:25000,
        cat:"Luxury",
    },
    {
        id:2,
        name:"Automatic Blue Dial",
        img:"https://m.media-amazon.com/images/I/6156eB7S+OL._AC_UL480_FMwebp_QL65_.jpg",
        price:13500,
        cat:"Dress",
    },
    {
        id:3,
        name:"Mathey Tissot Leather Swiss",
        img:"https://m.media-amazon.com/images/I/51Vq8PGziJL._AC_UL480_FMwebp_QL65_.jpg",
        price:7000,
        cat:"Sports",
    },
    {
        id:4,
        name:"Emporio Armani Renato Analog",
        img:"https://m.media-amazon.com/images/I/71di9XRBgQL._AC_UL480_FMwebp_QL65_.jpg",
        price:24000,
        cat:"Luxury",
    },
    {
        id:5,
        name:"Women's Lagan Chic",
        img:"https://m.media-amazon.com/images/I/61EAcTdXZ7L._AC_UL480_FMwebp_QL65_.jpg",
        price:7000,
        cat:"Casual",
    },
    {
        id:6,
        name:"Armani Exchange Analog",
        img:"https://m.media-amazon.com/images/I/61MFwxMjk9L._AC_UL480_FMwebp_QL65_.jpg",
        price:7600,
        cat:"Dress",
    },
    {
        id:7,
        name:"Alexandre Christie Chronograph",
        img:"https://m.media-amazon.com/images/I/71myQZ7VmtL._AC_UL480_FMwebp_QL65_.jpg",
        price:24000,
        cat:"Luxury",
    },
    {
        id:8,
        name:"Alexandre Women Analog",
        img:"https://m.media-amazon.com/images/I/616f7vycXHL._AC_UL480_FMwebp_QL65_.jpg",
        price:15700,
        cat:"Casual",
    },
    {
        id:9,
        name:"Fastrack Analog Unisex",
        img:"https://m.media-amazon.com/images/I/61ejZ8XbIcL._SY879_.jpg",
        price:2600,
        cat:"Sports",
    },
    {
        id:10,
        name:"Seiko Blue Dial Men's",
        img:"https://m.media-amazon.com/images/I/61Yk19vnC5L._AC_UL480_FMwebp_QL65_.jpghttps://m.media-amazon.com/images/I/61FAa5y193L._SY879_.jpg",
        price:18600,
        cat:"Casual",
    },{
        id:11,
        name:"Fitbit Inspire 2 Health & Fitness Tracker",
        img:"https://m.media-amazon.com/images/I/71wPLzgLNYL._AC_UY327_QL65_.jpg",
        price:5600,
        cat:"Sports",
    },
    {
        id:12,
        name:"NoiseFit Ultima Chronos",
        img:"https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UL480_FMwebp_QL65_.jpg",
        price:9600,
        cat:"Dress",
    }
]
const productsContainer=document.querySelector(".products")
const searchInput=document.querySelector(".search")
const categoriesContainer=document.querySelector(".cats")
const priceRange=document.querySelector(".priceRange")
const priceValue=document.querySelector(".priceValue")

const displayProducts=(filteredProducts)=>{
    productsContainer.innerHTML=filteredProducts.map(
        (product)=>

            `<div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText">${product.price}</span>
                </div>`
    ).join("")
}
displayProducts(data)

searchInput.addEventListener("keyup",(e)=>{
    const value =e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(items=> items.name.toLowerCase().indexOf(value)!==-1))
    }
    else{
        displayProducts(data)
    }
})

const setCategories=()=>{
    const allCats=data.map(item=>item.cat)
    const categories=[
        "All",
        ...allCats.filter((item,i)=>{
        return allCats.indexOf(item)===i;
    })];
    categoriesContainer.innerHTML=categories.map(cat=>
        `<span class="cat">${cat}</span>`
    ).join("")
categoriesContainer.addEventListener("click",(e)=>{
    const selectedCat=e.target.textContent;
    selectedCat==="All"
    ?displayProducts(data)
    :displayProducts(data.filter((item)=>item.cat===selectedCat))
 })
}
const setPrices=()=>{
    const priceList=data.map((item)  =>item.price);
    const minPrice=Math.min(...priceList)
    const maxPrice=Math.max(...priceList)
    priceRange.min=minPrice
    priceRange.max=maxPrice
    priceRange.value=maxPrice
    priceValue.textContent="Rs."+maxPrice


    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent="Rs."+ e.target.value;
        displayProducts(data.filter((item)=>item.price <= e.target.value))
  })
}
setCategories()
setPrices()
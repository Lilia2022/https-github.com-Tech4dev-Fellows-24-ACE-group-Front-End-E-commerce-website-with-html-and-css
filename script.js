//let checkCat = ["men's clothing", "jewelery", "electronics", "women's clothing"];

let productDiv = document.querySelector(".product");

var CategoryListDiv = document.querySelector(".CategoryList");

let allCat = [];

let displayProduct= async(allCheckCat=[])=>{
    //CategoryListDiv.innerHTML='';
    productDiv.innerHTML = '';
    let product = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await product.json();
    finalproduct.forEach(element =>{
        //cat data
        if(!allCat.includes(element.category)){
            CategoryListDiv.innerHTML += `
                <label >
                    <input type="checkbox" onclick='categoryFilter()' value="${element.category}">${element.category}
                </label>
            `;
            allCat.push(element.category)
        }
        //filter cat
        
        if(allCheckCat.length == 0){
            allCheckCat = allCat;
        }
       
        if(allCheckCat.includes(element.category)){
            //product data
            productDiv.innerHTML += `
                <div class="productItems">
                    <img src="${element.image}" alt="img">
                    <h4>${element.category}</h4>
                    <p>$ ${element.price} | ${element.rating.rate}</p>
                    <h3>${element.title}</h3>
                </div>
            `
        }
    });

}
displayProduct();

let categoryFilter=()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    //console.log(checkInput);
    let checkdata = [];
    checkInput.forEach((e)=>{
        
        if(e.checked){
           //console.log(e.value);
           checkdata.push(e.value);
        }
    })
    //console.log(checkdata);
    displayProduct(checkdata)
}
//object property shorthand

const name = 'Pillla'
const userAge =25

const user ={
    name,
    age: userAge,
    location: 'Delhi'
}

console.log(user);

//object destruction

const product ={
    lable: 'Red book',
    price: 10,
    stock: 201,
    salePrice: undefined,
    rating: 2.45
}
//const lable = product.lable;
//const stock = product.stock;

const {lable:productlable, stock, rating = 4} = product

console.log(productlable);
console.log(stock);
console.log(rating);

const transaction = (type, {lable:productlable, stock, rating = 4} = {})=>{
    console.log('in transaction')
    console.log(productlable);
    console.log(stock);
    console.log(rating);
}

transaction('type')

transaction('type', product)
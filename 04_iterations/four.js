const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and current value ${currval}`);
//     return acc + currval
// },0)

// console.log(myTotal);

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "java",
        price : 9999
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "javascript",
        price : 5000
    },
    {
        itemName : "React",
        price : 1999
    },
    {
        itemName : "Data Science",
        price : 2999
    },
]

const TotalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(TotalPrice)

const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);

const Tea = {
    name:'ginger chai',
    price: 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai is ready")
    }
}
console.log(Object.getOwnPropertyDescriptor(Tea,"name"));

Object.defineProperty(Tea, 'name',{
   // writable: false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(Tea,'name'));

for(let[key, value]of Object.entries(Tea)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}

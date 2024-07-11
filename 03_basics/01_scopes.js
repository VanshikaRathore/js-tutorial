let b=10;
var c= 300;
if(true){
    const a = 200;
    let b =200;
    // var c = 20;
    // console.log(b);
}
 //console.log(a);
//  console.log(b);
//   console.log(c);


function one(){
    const username = "anshika"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}


if(true){
    const username = 'hitanshi';
    if(username === "hitanshi"){
        const website = "youTube"
        //console.log(username + website);

    }
    //console.log(website);
}
//console.log(username);

addone(2); //not throw any error
function addone(num){
    return num + 1;
}

//console.log(addone(2));

 //because of hositing 
addTwo(5) ; //throw error
    const addTwo = function(num){
        return num + 2;
    }
  //  addTwo(5);
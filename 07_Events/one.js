// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// document.getElementById('owl').addEventListener('click', function(){
//     alert("owl clicked again")
// })

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the url");
// },false)
//   // it will run when image is clicked

//   document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked");  //without stopPropagation it will show bubbling type 1. clicked then 2.clicked inside the ul
//     e.stopPropagation(); // it will stop outer component only show clicked. 
// },false)


// document.getElementById('google').addEventListener('click',function(e){
//       console.log("google clicked");
//       e.preventDefault();
//       e.stopPropagation();
// },false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }  
}) // to remove the code

//removeIt.parentNode.removeChild(removeIt)
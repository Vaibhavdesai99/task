//GETELEMENTBYCLASSNAME =

//Make the 3rd element have green backgroundcolor:
//Make all the elements in the list have bold color font:



// console.log(document.getElementsByClassName("list-grpup"));


//Make the 3rd element have green backgroundcolor:
const items = document.getElementsByClassName('list-group-item');
console.log(items);

console.log(items[0]);    // we can select individually by index no.

items[2].style.backgroundColor="green";


//Make all the elements in the list have bold color font:
for(let i=0 ;i< items.length ;i++){
 
    items[i].style.fontWeight="bold";

}


// Queryselector :

//Make the 2nd item have green background color
// let seconditem =document.querySelector('.list-group-item:nth-child(2)');
// console.log(seconditem);
// seconditem.style.backgroundColor="green";
// //seconditem.style.border="solid 5px black"



// //Make the 3rd item invisible
// const thirdItem = document.querySelector('#items li:nth-child(3)');
// console.log(thirdItem)
// thirdItem.style.display = 'none';



// //QuerySelectorAll:


// //Using QuerySelectorALL change the font color to green for 2nd item in the item list
// const secondItem = document.querySelectorAll('#items li:nth-child(2)');
// secondItem.forEach((item)=>{
//     item.style.color="green";
// })


// //Choose all the odd elements and make their background green using QuerySelectorALL﻿

const oddItems = document.querySelectorAll('li:nth-child(odd)');

 for(let i=0 ;i< oddItems.length ;i++)
{
    oddItems[i].style.backgroundColor="green"
}
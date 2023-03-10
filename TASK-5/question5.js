// TRAVERSING THE DOM   ==>> Below are properties:-
//Grabbing the ul of id = 'items'
const itemlist = document.querySelector('#items')

//1]parentNode :-

//ParentNode is basically the Node having <div> not <h1>/<form> be the parentNode 
//console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="grey";
// console.log(itemlist.parentNode.parentNode.parentNode)

   //#--BOTH ARE SAME parentElement & parentNode---# ==><div>)

//2]parentElement:-

//console.log(itemlist.parentElement)
//itemlist.parentElement.style.backgroundColor="grey";
//console.log(itemlist.parentElement.parentElement)


//3]childNode  :- Return Type => Nodelist

//do not use 
// 0 : text <==shows white spaces due to line break 
// console.log(itemlist.childNodes)


//4]children :- Return Type => HTMLCollection

// use index no. to check any in that li 
// console.log(itemlist.children)
// itemlist.children[1].style.backgroundColor="yellow"
// itemlist.children[2].style.display="none";


//5]firstchild :- 

//do not use ==> caz // give text <== white space due to <br>
// console.log(itemlist.firstChild)


//6]firstElementChild :- 

// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent="Hello"
// itemlist.firstElementChild.style.fontWeight="bold";


//6]lastchild :- 

//do not use ==> caz // give text <== white space due to <br>
//  console.log(itemlist.lastChild)


//7]lastElementChild :- 

// console.log(itemlist.lastElementChild)
//  itemlist.lastElementChild.textContent="Hello"
// itemlist.lastElementChild.style.backgroundColor="yellow";





//8]nextSiblings:-
//do not use this return text
//console.log(itemlist.nextSibling)    //op=>#text

//9]nextElementSiblings
// use this
//console.log(itemlist.nextElementSibling)

//10]previousSibling:-
//do not use this return text 
//console.log(itemlist.previousSibling)

//11]previousElementSibling:-
//use this
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.display="none";
// itemlist.previousElementSibling.style.color="yellow";

//========================CREATE ELEMENT =================================================//

//1]Create div :

 const newdiv = document.createElement('div')
//  console.log(newdiv);

// Add class :

newdiv.className ="hello";

//Add id :
newdiv.id="hii";

//Add attributes :
newdiv.setAttribute('text','username');

//Add textNode :

// Use innerHTML to set the HTML content of an element, replacing any existing content.
// Use appendChild() to add a new child node to an element, such as a text node.

// newdiv.innerHTML="Hello world";

//create TextNode:
const Textnode = document.createTextNode('HEllo');

// add textNode to newdiv:
newdiv.appendChild(Textnode);

// console.log(newdiv)


//====================NOW ADD IT =======================

//Grab the before and after element to push your new div in-between them .

//After this ele
const container = document.querySelector('header .container')

//Before this ele
const h1 = document.querySelector('h1');

container.insertBefore( newdiv , h1 )
//insertBefore take two parameter 1st- what you are inserting and 2nd-what was inserting before(h1)
//============================================================

// newdiv.style.color="black";
// newdiv.style.fontWeight="bold";
// newdiv.style.fontSize="40px";
// newdiv.style.borderBottom="solid 2px black";

//Now go head and add HEllo word before Item 1

//Find the list element
const itemList = document.querySelector('#items');

// Create a new list item 
const newItem = document.createElement('li');
newItem.className = 'list-group-item';
newItem.innerHTML = 'HEllo';


//Get the first child of the list (which is the first item)
const firstItem = itemList.firstElementChild;

// Insert the new item before the first item
itemList.insertBefore(newItem, firstItem);

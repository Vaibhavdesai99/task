

const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');
const filter = document.getElementById('filter')



//Form submit event :
form.addEventListener('submit',addItem);
//To remove items :
itemlist.addEventListener('click',removeitem);
//Filter event :
filter.addEventListener('keyup',filterItems)


//===============>>>Calling function :

function addItem(e)
{
    e.preventDefault();  
    const input = document.getElementById('item').value  // this for first input field
    const input2=document.getElementById('item2').value  //this for second input field

//created newli when user type something that show when he :
const newli = document.createElement('li');

//added className:
newli.className="list-group-item";

//TextNode should be what user enters:
const Textnode =document.createTextNode(input);       //here we insert input that what user enter in 1st input field
const Textnode2=document.createTextNode(input2)      //here we insert input that what user enter in 2nd input field

//append TextNode to newli:
newli.appendChild(Textnode)                          //append textnode to newli that you have created   
newli.appendChild(Textnode2)
//console.log(newli)



//=============>>>CREATING DELETE BUTTON :

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node: below both are same :-
  //const text = document.createTextNode('x')
  //deleteBtn.appendChild(text)

 deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  newli.appendChild(deleteBtn);


//=============>>>Adding Edit button for newItem

//created new editbutton :
const editBtn = document.createElement('button');
//added className :
editBtn.className = 'btn btn-primary btn-sm float-right edit'
// created TextNode:
editBtn.appendChild(document.createTextNode(' EDIT'))
newli.appendChild(editBtn)
  
//append newli to ul :
itemlist.appendChild(newli)                             //imp here we add our new li to the ul 
   
}                                                       //addItem() function end here

//=====================>>>>REMOVE ITEM

function removeitem(e){

    if(e.target.classList.contains('delete'))     //btn has delete class classlist contains caz only when we click on that button  
    {
       if(confirm('Are you sure?')){
        const li = e.target.parentElement;       //parentElement is li where user added of button : means button has parent->li
         itemlist.removeChild(li);               //itemlist is ul -> an we removing li from ul. 
       }
    }

}

//===============>>>>> Adding Edit button for exising(which are already present) li ->

const existingLiElements = itemlist.querySelectorAll('li');

  existingLiElements.forEach(li => {
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode(' EDIT'));
  li.appendChild(editBtn);
});

//==================>>>>>Filter Items

//Filtering for both input field:-

 function filterItems(e)
{
   //convert text to lowerCase() what is user search for 
   const text = e.target.value.toLowerCase();
      
   //grab all the li in itemlist:
   const items=  itemlist.getElementsByTagName('li');

   //convert HTML collection to array :
   Array.from(items).forEach(function(item){
      const itemName1= item.childNodes[0].textContent.toLowerCase();
      const itemName2= item.childNodes[1].textContent.toLowerCase();
      if(itemName1.indexOf(text) != -1 || itemName2.indexOf(text) != -1){ 
          item.style.display='block';
      }else{
        item.style.display='none';
      }
   });
}
//========>>>>>>>

// Filter items :-filtering the first input only :- below ----

// function filterItems(e)
// {
//        //convert text to lowerCase() what is user search for 

//         const text = e.target.value.toLowerCase();

//        //grab all the li in itemlist:

//        const items=  itemlist.getElementsByTagName('li');

//      //convert HTML collection to array :

//         Array.from(items).forEach(function(item){

//       const itemName= item.firstChild.textContent.toLowerCase();

//       if(itemName.toLowerCase().indexOf(text) != -1){ 

//           item.style.display='block';
//       }else{
//         item.style.display='none';
//       }
//      })

// }
//====================>>>> Adding one more imput field:

//creating new input :

const newinput=document.createElement('input');
// console.log(newinput)
newinput.className='form-control mr-3';
newinput.id='item2';
newinput.setAttribute('type','text')
const firstinput = document.querySelector('#item');
firstinput.insertAdjacentElement('afterend',newinput);


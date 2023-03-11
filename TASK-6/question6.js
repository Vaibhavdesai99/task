

const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');


//Form submit event :
form.addEventListener('submit',addItem);
//T remove items :
itemlist.addEventListener('click',removeitem);

//function:-
function addItem(e)
{
    e.preventDefault();  
    const input = document.getElementById('item').value 

//created newli when user type something that show when he :
const newli = document.createElement('li');

//added className:
newli.className="list-group-item";

//TextNode should be what user enters:
const Textnode =document.createTextNode(input);

//append TextNode to newli:
newli.appendChild(Textnode)
//console.log(newli)


//==========>CREATING DELETE BUTTON :

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node:    below both are same :-

  //const text = document.createTextNode('x')
  //deleteBtn.appendChild(text)

 deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  newli.appendChild(deleteBtn);


//============>Adding Edit button for newItem


const editBtn = document.createElement('button');
editBtn.className = 'btn btn-primary btn-sm float-right edit'
editBtn.appendChild(document.createTextNode(' EDIT'))
newli.appendChild(editBtn)
  


//append newli to ul :
itemlist.appendChild(newli)

 
}

//==============> REMOVE ITEM ==========>

function removeitem(e){

    if(e.target.classList.contains('delete')) //btn has delete class 
    {
       if(confirm('Are you sure?')){
        const li = e.target.parentElement;    //parentElement is li where user added of button : means button has parent->li
         itemlist.removeChild(li);           //itemlist is ul -> an we removing li from ul. 
       }
    }

}

//===============> Adding Edit button for exising(which are already present) li ->

const existingLiElements = itemlist.querySelectorAll('li');

  existingLiElements.forEach(li => {
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode(' EDIT'));
  li.appendChild(editBtn);
});
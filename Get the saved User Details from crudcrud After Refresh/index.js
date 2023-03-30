

//storing data to ===============>>>>>>>>>>>>DATABASE===========>>>> [POST]

//axios Always  ======>>>return promise 

//here we are using async await instead of .then  caz using async => our code look easy to read and und .

const form = document.getElementById('my-form')


//we pass function here as second argument :-
form.addEventListener('submit', store)


//We SHOULD have to use async whenever we use await :-

 async function store(e){


//use try catch to handel errors :- 

    try {

        e.preventDefault();

        const name = e.target.username.value
        const email=e.target.useremail.value
        const number=e.target.usernumber.value
        
        
        const obj={
             name,
             email,
             number
        }
        
    
              //we should use await here before axios & after crudcrud link we have to give Route like :- BOOKAPP and pass the obj

               const response = await axios.post("https://crudcrud.com/api/6633730883c34c93b463e283aabc3e15/BOOKAPP",obj)
               
               //checking for network responses :-

               if(response.status >= 200 && response.status < 300)
                {
                    //To show data on screen : function call
                    ShowUsersOnScreen(response.data) 

                    console.log("POST REQ SUCCESSFUL: " ,response.data)
                }
                else
                {
                    console.log("POST REQ FAILED :" , response.status)
                }
               
              
             // Clear the input fields after submitting the form
             const inputs = document.querySelectorAll('#my-form input');
             inputs.forEach(input => input.value = '');
        
    } catch (error) {

         //to display error on screen :-

         document.body.innerHTML=document.body.innerHTML+"<h4>Something Went Wrong</h4>"

        console.log("ERROR:SOMETHING WENT WRONG", error)
        
    }
 
}


//GET / RETRIVING DATA FROM SERVER WHEN PAGE GET REFRESH ==========>>>>RELOADED=====>[GET]


//window is a global object that represents the browser window.

//DOMContentLoaded event to ensure that your JavaScript code runs only after the HTML content of the page has been fully loaded.


window.addEventListener("DOMContentLoaded", async () => {

    try {

        const responses = await axios.get("https://crudcrud.com/api/6633730883c34c93b463e283aabc3e15/BOOKAPP")
    

         console.log(responses.data)                  //here we get the data in the form of array so we ittrate on that.


          for(let i=0 ;i<responses.data.length;i++)
          {        
             ShowUsersOnScreen(responses.data[i])
          }
    

    } catch (error) {
     
     console.log('ERROR : SOMETHING WENT WRONG :- ', error)
    }


}) 



//================================================>>>>>>>>

//to display data on screen :-


function ShowUsersOnScreen(obj)
{

const ul = document.createElement('ul')

form.insertAdjacentElement('afterend',ul)

const li = document.createElement('li')

li.textContent=` Username ${obj.name} Useremail ${obj.email} Usernumber ${obj.number}`

ul.appendChild(li)



//removing data from local storage and from screen:

//Created delete button:-
const btn = document.createElement('button')
btn.type="button";
btn.textContent='DELETE'
//console.log(btn)
li.appendChild(btn)


// btn on-click-event:-
btn.onclick= ()=> {
li.remove()
localStorage.removeItem(obj.email)
}


//Adding EDIT BUTTON :-  to get value back in input box
const edit=document.createElement('button')
edit.textContent="EDIT"
li.appendChild(edit)

edit.onclick=()=>{

  document.getElementById('name').value=obj.name
  document.getElementById('email').value=obj.email
  document.getElementById('number').value=obj.number

}

}
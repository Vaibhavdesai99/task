
// Booking appointment App:
//Here we are storing the user input details to local storage : when user enter his details it get directly stored to local storage 

const form = document.querySelector('#my-form');
//console.log(form)
const userName = document.querySelector('#name');
// console.log(userName)
const userEmail= document.querySelector('#email');
// console.log(userEmail)
const msg= document.querySelector('.msg');
//console.log(msg)




form.addEventListener('submit',function(event){


    event.preventDefault();
    //console.log(1)

  if(userName.value==" " || userEmail.value ===" ")
  {
            msg.innerHTML="Please fill the form"
            msg.classList.add('error')
            setTimeout(()=>msg.remove(),3000)
  }
  else{
          // Store user data in local storage using email  as key:caz if we use userName as key it get overrided caz 
          //person having same name thats why we use email as key 

             localStorage.setItem(userEmail.value, JSON.stringify({
             name: userName.value,
             email: userEmail.value
  }));
      
        
    }

    //to clr input field;
    userName.value="";
    userEmail.value="";

});



     //JSON.stringify() is a method that converts a JavaScript object or value to a JSON string
     //When we store data in the localStorage, we can only store strings. So, if we want to store an object or an array, 
     //we  need to first convert it to a JSON string using JSON.stringify().
    




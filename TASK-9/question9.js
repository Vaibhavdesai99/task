
const form = document.querySelector('#my-form')

const userName = document.querySelector('#name');

const userEmail= document.querySelector('#email');

const msg = document.querySelector('.msg')


   form.addEventListener('submit',function(event){

   event.preventDefault();



    if(userName.value =="" ||userEmail.value =="")
    {
        msg.innerHTML="Please fill the form"
        msg.classList.add('error')
        setTimeout(()=>msg.remove(),3000)

    }
    else{

         // localStorage.setItem('userName',userName.value)
         // localStorage.setItem('userEmail',userEmail.value) 

         localStorage.setItem(userEmail.value,JSON.stringify({

     
                name:userName.value,
                email:userEmail.value

            }));

            // Output  == >  stored data as an object

            const storedData = JSON.parse(localStorage.getItem(userEmail.value));
            console.log(storedData); 
    
           
    }



//clear input fields:
userName.value="";
userEmail.value="";

})
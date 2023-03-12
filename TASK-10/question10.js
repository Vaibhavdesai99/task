const form = document.querySelector("#my-form");
//console.log(form)
const Name = document.getElementById("Name");
// console.log(Name)
const Email = document.getElementById("Email");
// console.log(email)
const number = document.getElementById("Number");
// console.log(number);
// const newul = document.getElementById("#user");
// console.log(newul);

//==========>>>>>Created new ul to show all user input data on screen - append with li: & inserted after <form>

const ul = document.createElement("ul");
ul.id = "user";
// ul.innerHTML="HIIyiiiiii
form.insertAdjacentElement("afterend", ul);

//==========>>>>>>>>>

form.addEventListener("submit", function (e) {

             e.preventDefault();


           if(Name.value == "" || Email.value == "" || number.value == ""){


            alert("enter details");
        }

        else{

            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`UserName: ${Name.value}  UserEmail: ${Email.value}  UserPhoneNumber : ${number.value}`));
             
       
            ul.appendChild(li);  //append li with ul 
   
        
            localStorage.setItem(Email.value, JSON.stringify({                               //Object to string
      
                                                 userName: Name.value,
                                                 userEmail: Email.value,
                                                 userNumber: number.value,
                                            })
                                           
                                 );
       
       
               const objectback = JSON.parse(localStorage.getItem(Email.value));           //string to object again
               console.log(objectback);
     
         }

    //clear input field :

    Name.value="";
    Email.value="";
    number.value="";

});

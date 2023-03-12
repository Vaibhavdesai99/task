const form = document.querySelector("#my-form");
const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const Number = document.getElementById("Number");

//created ul 
const ul = document.createElement("ul");
ul.id = "user";
form.insertAdjacentElement("afterend", ul);


// submit event :
form.addEventListener("submit", function (e) {

  e.preventDefault();

  if (Name.value == "" || Email.value == "" || Number.value == "") {

    alert("Enter details");

  } else {
//created  li:

    const li = document.createElement("li");
  
//added the input user data:

    li.textContent = `UserName: ${Name.value} UserEmail: ${Email.value} UserPhoneNumber: ${Number.value}`;

//created button fr user user click delet button the data get removed from local stg as well as from screen:

    const btn = document.createElement("button");
    
    btn.textContent = "Delete";

//here we are set attri as name and value: it delete from local storage  

    btn.setAttribute("data-email", Email.value);

//btn is append to li:
    li.appendChild(btn);

//ul append to li:
    ul.appendChild(li);


//to store data in local storage :

    localStorage.setItem(Email.value, JSON.stringify({
                                  userName: Name.value,
                                  userEmail: Email.value,
                                  userNumber: Number.value,
                    }));
  }

// to reset input data:
  Name.value = "";
  Email.value = "";
  Number.value = "";

});

//delet event :- from local stg and frm display:

ul.addEventListener("click", function (e) {

  if (e.target.tagName === "BUTTON") {

    const email = e.target.getAttribute("data-email"); // here we already set value to Email.value(i.e user input data)

    localStorage.removeItem(email);                 // removing frm local storage.

    e.target.parentElement.remove();              // removing li 
  }

});

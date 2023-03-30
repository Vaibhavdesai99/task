const form = document.getElementById('my-form');

form.addEventListener('submit', store);

async function store(e) {
  try {
    e.preventDefault();

    const name = e.target.username.value;
    const email = e.target.useremail.value;
    const number = e.target.usernumber.value;
    
    const obj = {
      name,
      email,
      number
    };

 //=======================================================>>>[POST]=> Post to CRUDCRUD.server .

    const response = await axios.post("https://crudcrud.com/api/732d6b1595374d9c80948b88862c82bf/Update", obj);
   
    if (response.status >= 200 && response.status < 300) {
      ShowUsersOnScreen(response.data);
      console.log("POST REQ SUCCESSFUL: ", response.data);
    } else {
      console.log("POST REQ FAILED :", response.status);
    }
    
    const inputs = document.querySelectorAll('#my-form input');
    inputs.forEach(input => input.value = '');
    
  } catch (error) {
    document.body.innerHTML += "<h4>Something Went Wrong</h4>";
    console.log("ERROR: SOMETHING WENT WRONG", error);
  }
}


//==========================================================>[GET]===>get the data .

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("https://crudcrud.com/api/732d6b1595374d9c80948b88862c82bf/Update");
    console.log(response.data);

    response.data.forEach(obj => {
      ShowUsersOnScreen(obj);
    });

  } catch (error) {
    console.log('ERROR : SOMETHING WENT WRONG :- ', error);
  }
});

//=========================================>>>>>>>>>[DISPLAY ON SCREEN]=>WEBPAGE

function ShowUsersOnScreen(obj) {
  const ul = document.createElement('ul');
  form.insertAdjacentElement('afterend', ul);

  const li = document.createElement('li');
  li.textContent = ` Username ${obj.name} Useremail ${obj.email} Usernumber ${obj.number}`;
  ul.appendChild(li);

  const btn = document.createElement('button');
  btn.type = "button";
  btn.textContent = 'DELETE';
  li.appendChild(btn);


 //=================================================>>>>>>[DELETE]=>removing data server and li 
  btn.onclick = async () => {
    try {
      li.remove();
      const response = await axios.delete(`https://crudcrud.com/api/732d6b1595374d9c80948b88862c82bf/Update/${obj._id}`);

      if (response.status >= 200 && response.status < 300) {
        console.log("DELETE REQ SUCCESSFUL: ", response.data);
      } else {
        console.log("DELETE REQ FAILED :", response.status);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  
  //=========================================================>>>>>>>>>[UPdate]=>PUT
  const upDate = document.createElement('button');
  upDate.textContent = "EDIT";
  li.appendChild(upDate);

  const updateUser = async (id, data) => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/732d6b1595374d9c80948b88862c82bf/Update/${id}`, data);
      if (response.status >= 200 && response.status < 300) {
        console.log("PUT REQ SUCCESSFUL", response.data);
      } else {
        console.log("PUT REQ FAILED :", response.status);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  
  upDate.onclick = async () => {

    const name = prompt('Enter updated name:', obj.name);
    const email = prompt('Enter updated email:', obj.email);
    const number = prompt('Enter updated number:', obj.number);
    
    const updatedData = {
      name,
      email,
      number
    }

    updateUser(obj._id, updatedData);
  };
}
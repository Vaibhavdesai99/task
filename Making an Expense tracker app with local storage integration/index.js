//Grabbing all input field by id name:-

const form = document.querySelector('#my-form');
const expenseAmt = document.getElementById('expenceAmt');
const description = document.getElementById('description');
const choose = document.getElementById('any');
const formDataList = document.getElementById('form-data');   //this is ul 


//when user click on addexpence :-

form.addEventListener('submit', function(e) {

  e.preventDefault();                                  //preventing from reload the page 


  // Get the values of the form fields:-
  const expenseAmtValue = expenseAmt.value;
  const descriptionValue = description.value;
  const chooseValue = choose.value;

 
 
  // Storing the form data to local storage:-

  localStorage.setItem('expenseAmt', expenseAmt.value);
  localStorage.setItem('description', descriptionValue);
  localStorage.setItem('choose', chooseValue);




  // when user click on submit then that data also shown on display :-
  //creating li :-
  const formDataEntry = document.createElement('li');
   formDataEntry.innerHTML = `
     Expense Amount: ${expenseAmtValue}
     Description: ${descriptionValue}
     Choose: ${chooseValue}
    <button class="delete-btn">delete Expense</button>
    <button class="edit-btn">edit Expense</button>
  `;


  // Add event listeners for the delete to remove data from local storage and from screen also;
  
  const deleteBtn = formDataEntry.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', function() {

      //remove data from local storage:-
      localStorage.removeItem('expenseAmt');
      localStorage.removeItem('description');
      localStorage.removeItem('choose');

      //remove data from screen:-
     formDataEntry.remove();
  });



  //when user hit on edit button:-that data comes back to input field itself-to chnage:-
  const editBtn = formDataEntry.querySelector('.edit-btn');

   editBtn.addEventListener('click', function() {
    expenseAmt.value = expenseAmtValue;
    description.value = descriptionValue;
    choose.value = chooseValue;
  });

  // Add the form data entry to the form data list :- adding ul to li here
  formDataList.appendChild(formDataEntry);
});

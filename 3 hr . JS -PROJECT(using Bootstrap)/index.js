//BY DOM :-

//Grabbing all input fields :-

const form = document.getElementById('my-form')
//console.log(form)
const input1= document.getElementById('expenseName')
//console.log(input1)
const input2=document.getElementById('descriPtion')
//console.log(input2)
const category=document.getElementById('cateGory')
//console.log(category)
const btn = document.getElementById('btn')
//console.log(btn)

// showing data to console when use hit on submit button:-
form.addEventListener('submit',submitData)

function submitData(e)
{

     e.preventDefault(); //preventing frm refresh the page :

     if(input1.value == "" || input2.value =="" || category.value=="")
     {
          alert("Please enter the below details")
     }
     else
     {
       //Showing data on console on browser:-
      // console.log(`expenseAdded Rs-${input1.value} description - ${input2.value} category - ${category.value} `)



      //storing data to local-storage :-
      const formData={
                     expenseName:input1.value,
                     description:input2.value,
                     category:category.value

                    }
  
              
       //creating Random key :-
       const key = Math.random()
    
      // convert the data to a JSON string
       const jsonData = JSON.stringify(formData);

        
       // store the string in local storage with the key
        localStorage.setItem(key, jsonData);

        //To show data on screen :- put inside else condition 
  
        displayDataOnScreen(formData,key)
     }
    //clr input field:-
     input1.value="";
     input2.value="";
     category.value="";
}





//Display  input data on screen :-

//pass key also the get key otherwise you cant able to delete data from local storage:-
function displayDataOnScreen(formData,key) {
   
    //creating ul :-
    const ul = document.createElement('ul')
  
    //creating li :-
    const li = document.createElement('li') 
    li.id="li"
    li.innerHTML=`ExpenseAdded Rs-${input1.value} Description - ${input2.value}  Category - ${category.value} `
    
    ul.appendChild(li)
   
    form.appendChild(ul)
  
    

 //1]delete button
    const btn1 =document.createElement('button')
    btn1.className="btn btn-primary"
    btn1.id="btn1"
    btn1.textContent="DeleteExpense"
    li.appendChild(btn1)
  


//deleting data from screen as well as from Screen & local storage:-
   btn1.onclick=()=>{
    alert("Do you want to remove your expense..?")
    li.remove();
    localStorage.removeItem(key)
   }
    
    
//2]editbutton:-
//populate back again input fields:-
const btn2=document.createElement('button')
btn2.className="btn btn-primary"
btn2.id="btn2"
btn2.innerHTML="EditExpense"
li.appendChild(btn2)


//user click on edit button that input field populate again with that data:-
btn2.onclick=()=>{
    li.remove();
    localStorage.removeItem(key)
   
        input1.value = formData.expenseName;
        input2.value = formData.description;
        category.value = formData.category;  
}
}
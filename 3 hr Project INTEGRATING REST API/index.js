
//Grabbing all input fields:-
const form = document.getElementById('my-form')
const itemName = document.getElementById('itemName')
const description= document.getElementById('description')
const price = document.getElementById('price')
const quantity = document.getElementById('quantity')


// form listen submit event.
form.addEventListener('submit',store)


//here we use async await : with try and catch 
async function store(e)
{   

      try {
        
        e.preventDefault()
     
        //obj to store the user input values
      const obj ={
        
           itemName:itemName.value,
           description:description.value,
           price:price.value,
           quantity:quantity.value 
      }
         //here sending to database , with obj 
         const response = await axios.post('https://crudcrud.com/api/8545bc2a28904d7eb4acb998a058a048/QuantityData',obj)

         //checking the response status 
           if(response.status >= 200 && response.status <300)
           {  showUserDataOnScreen(response.data)  //todisplay new created data on screen

            console.log("POST REQ SUCCESSFUL:",response.data)
           }
           else
           {
            console.log("POST REQ FAILED:",response.status)
           }
     

    
      } catch (error) {
        
        console.log("ERROR:SOMETHING WENT WRONG" , error)
      }

     

    
}

//When page refresh :- that data will be shown on screen , after DOM loaded

window.addEventListener('DOMContentLoaded',async()=>{

           try {

            const getData = await axios.get('https://crudcrud.com/api/8545bc2a28904d7eb4acb998a058a048/QuantityData')

            if(getData.status >= 200 && getData.status<300)

            {      
                  
                  // console.log("GET DATA SUCCESSFUL:" ,getData.data)
                    for(var i=0 ;i< getData.data.length;i++)
                    {
                        showUserDataOnScreen(getData.data[i])
                    }

            }
            else
            {
                console.log("GET DATA UNSUCCESSFUL:",getData.status)
            }

           } catch (error) {
            
            console.log('SOMETHING WENT WRONG:' ,error)
           }

})

//show data on screen  

function showUserDataOnScreen(response) {


    //creating ul
    const ul = document.createElement("ul");

    //insert it after form end
    form.insertAdjacentElement("afterend", ul);

    //creating new li 
    const li = document.createElement("li");

    li.id = "newLi";

   
    li.dataset.quantity = response.quantity;

    li.dataset.id = response._id;
   //to shown data on screen we use innerHTML here-
    li.innerHTML = `itemName: ${response.itemName} description: ${response.description} price: ${response.price} quantity: ${response.quantity}`;

    
    ul.appendChild(li);


  //creating button 1 when user hit , the value get reduced by 1
    const btn1 = document.createElement("button");
    btn1.id = "btn1";
    btn1.innerHTML = "BUY1";
    li.appendChild(btn1);


//creating button 2 : when user hit , the value get reduced by 2 from current quantity
    const btn2 = document.createElement("button");
    btn2.id = "btn2";
    btn2.innerHTML = "BUY2";
    li.appendChild(btn2);

//creating button 3: when user hit , the value get reduced by 3 from current quantity 
    const btn3 = document.createElement("button")
    btn3.id = "btn3";
    btn3.innerHTML = "BUY3";
    li.appendChild(btn3);


//on click button event :-  

    btn1.onclick = async () => {

      const quantity = parseInt(li.dataset.quantity);
    if(quantity > 0)
    {
      li.dataset.quantity=quantity-1
    
  
      const updatedQuantity = parseInt(li.dataset.quantity);

      console.log(`New quantity: ${updatedQuantity}`);

      const id = li.dataset.id;

      const url = `https://crudcrud.com/api/8545bc2a28904d7eb4acb998a058a048/QuantityData/${id}`;


      const updatedData = {
        itemName: response.itemName,
         description: response.description,
         price: response.price,
        quantity: updatedQuantity,
      

      };
      try {

        const response = await axios.put(url, updatedData);

        if (response.status >= 200 && response.status < 300) {

          console.log("PUT REQ SUCCESSFUL", response.data);

        } else {

          console.log("PUT REQ FAILED:", response.status);

        }
      } catch (error) {

        console.log("ERROR:SOMETHING WENT WRONG", error);

      }
    }
    else
    {
      console.log("OUT OF STOCK")
    }
  
};




    btn2.onclick = async () => {
        const quantity = parseInt(li.dataset.quantity);

        if (quantity >= 2) {

          li.dataset.quantity = quantity - 2;
        
       

          const updatedQuantity = parseInt(li.dataset.quantity);

          console.log(`New quantity: ${updatedQuantity}`);

          const id = li.dataset.id;

          const url = `https://crudcrud.com/api/8545bc2a28904d7eb4acb998a058a048/QuantityData/${id}`;

          const updatedData = {
            itemName: response.itemName,
            description: response.description,
            price: response.price,
   
            quantity: updatedQuantity,

          };
          try {
            const response = await axios.put(url, updatedData);

            if (response.status >= 200 && response.status < 300) {

              console.log("PUT REQ SUCCESSFUL", response.data);

            } else {

              console.log("PUT REQ FAILED:", response.status);
            }
          } catch (error) {
            console.log("ERROR:SOMETHING WENT WRONG", error);
          }
        }
        else
        {
          console.log("OUT OF STOCK")
        }
      };
      


      btn3.onclick = async () => {

     

        const quantity = parseInt(li.dataset.quantity);

        if (quantity >= 3) {

          li.dataset.quantity = quantity - 3;
        
      
          const updatedQuantity = parseInt(li.dataset.quantity);

          console.log(`New quantity: ${updatedQuantity}`);

          const id = li.dataset.id;

          const url = `https://crudcrud.com/api/8545bc2a28904d7eb4acb998a058a048/QuantityData/${id}`;

          const updatedData = {
            itemName: response.itemName,
            description: response.description,
            price: response.price,
   
            quantity: updatedQuantity,

          };
          try {
            const response = await axios.put(url, updatedData);

            if (response.status >= 200 && response.status < 300) {

              console.log("PUT REQ SUCCESSFUL", response.data);

            } else {

              console.log("PUT REQ FAILED:", response.status);
            }

          } catch (error) {

            console.log("ERROR:SOMETHING WENT WRONG", error);
          }
        
        } 
        else
        {
          console.log("OUT OF STOCK")
        }

      };
      


  }
  
    
//GETELEMENTBYTAGNAME = 

///Add a new li element without the same class Name
//And try editing it with getelementsbyclassname and then by getelementbytagname.



const newli = document.createElement('li')
newli.innerHTML="Item5"
const grabul= document.getElementById('items')
grabul.append(newli);


// Getting by tag name :=
const li = document.getElementsByTagName('li');
li[4].textContent="Hello";
li[4].style.listStyleType="none"; //to remove bulletstyle
li[4].style.fontWeight="bold"        


for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="yellow";
     li[i].style.border="solid 2px red";
}


//Gettingby-elementbyClassName :-

// const newli = document.createElement('li')
// newli.innerHTML="Item5"
// newli.classList.add('list-group-item');
// const ul = document.getElementById('items');
// ul.appendChild(newli);
// console.log(newli);


// const li = document.getElementsByClassName('list-group-item');
// console.log(li);

// li[2].textContent="HELLO";


// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor="grey"
// }

// li[4].style.border="solid 5px red";
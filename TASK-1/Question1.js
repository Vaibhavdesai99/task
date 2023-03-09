 //DOM:-

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
//  console.log(document.title);
// document.title='Listener';


// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// getting via index number:
// console.log(document.all[10]);

// document.all[10].textContent="Vaibhav";
// console.log(document.forms);
// console.log(document.links);   //show empty caz we don't have links
// console.log(document.images);


//1]getElementbyId:
const headerTitle = document.getElementById('header-title');

// header.textContent="Hello";
// header.innerText="HII";

//2]adding border at bottom:-
const head = document.getElementById('main-header');
head.style.borderBottom ='solid 3px black';

// headerTitle.style.borderBottom='solid 3px black';
// console.log(headerTitle);

//3]changing font style bold and color also:
const h2 = document.querySelector('h2');
h2.style.fontWeight="bold";
h2.style.color="green";
console.log(h2);
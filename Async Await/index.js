
//Task =>  create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code




//  Using  ====================================================>>>>>Promises


/*console.log('person1:shows ticket');
console.log('person2:shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

const getPopCorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife : i have ticks')
console.log('husband : we should go in ');
console.log('wife : no i am hungry')
return new Promise((resolve,reject) => resolve (`${t} popcorn`))

 
});
const getButter=getPopCorn.then((t) => {
    console.log('husband : i got some popcorn ');
    console.log('husband : we should go in ');
    console.log('wife : i need butter on my popcorn')
    return new Promise((resolve,reject) => resolve (`${t} butter`))
    
});

const getColdDrinks = getButter.then((t) => {
    console.log('husband: I got butter on the popcorn.');
    console.log('husband: Let me get some cold drinks.');
    return new Promise((resolve, reject) => {
      resolve(`${t} cold drinks`);
    });
  });

console.log('person4:shows ticket');
console.log('person5:shows ticket');*/




//Using===================================================>>>>>>>// Async/await:-

//Using Async/await
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopCorn = new Promise((resolve, reject) => {
        resolve(`popcorn`);
    });

    const addbutter = new Promise((resolve, reject) => {
        resolve(`butter`);
    });

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife : i have ${ticket}`);
    console.log('husband : we should go in ');
    console.log('wife : no i am hungry');

    let popcorn = await getPopCorn;

    console.log(`husband : i got some ${popcorn}`);
    console.log('husband : we should go in ');
    console.log('wife : i need butter on my popcorn');

    let butter = await addbutter;

    console.log(`husband : i got some ${butter}`);
    console.log(`husband : let me get some cold drinks.`);

    const getColdDrinks = new Promise((resolve, reject) => {
       
    resolve(`${ticket}`);
        
    });

    return getColdDrinks;
};

preMovie().then((t) => {
    console.log(`person3: shows ${t}`);
});

console.log('person4:shows ticket');
console.log('person5:shows ticket');




//==============================================================>>>>>>>>>>>>>>>Promises.all



/*console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopCorn = new Promise((resolve, reject) => {
        resolve(`popcorn`);
    });

    const getCandy = new Promise((resolve, reject) => {
        resolve(`candy`);
    });

    const getCoke = new Promise((resolve, reject) => {
        resolve(`coke`);
    });

    let ticket = await promiseWifeBringingTicks;


      let [popcorn ,candy , coke ]= await Promise.all([getPopCorn,getCandy,getCoke])

      console.log(`${popcorn} ,${candy} ,${coke}`)
   
return ticket;
    

};

preMovie().then((m) => {
    console.log(`person3: shows ${m}`);
});

console.log('person4:shows ticket');
console.log('person5:shows ticket');*/




//=====================================================>>>>>>>>>>>>>>>>>> Try Catch Error handeling:-



/*console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket');
        }, 3000);
    });

    let ticket
    try{
    ticket = await promiseWifeBringingTicks;
    } catch(e){
        ticket ="sad face"
    }
 


return ticket;
    

};

preMovie().then((m) => {
    console.log(`person3: shows ${m}`);
});

console.log('person4:shows ticket');
console.log('person5:shows ticket');*/


//=================================================================================>>>>>>>>>>>Example 




/*const testUserForm = async () => {
    const testUserForm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('page loaded');
        }, 3000);
    });

    const enterUserName= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('user entered');
        }, 3000);
    });


    const verifyUserDetails=() => {

    }
     await loaduserForm ;
     await enterUserName;
      const testResult = verifyUserDetails();
  

      return testResult ;
};

testUserForm().then((m) => {
    console.log(`shows ${m}`);
});*/
//=======================================================================>>>>>>>>>>>CREate and delete post:-



/*const posts = [{title: 'POST1'}];

function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}



function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}




function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}


async function run() {
    try {
      await create2ndPost();
      const post2 = await deletePost();
      console.log(post2.title);
      await create3rPost();
      const post3 = await deletePost();
      console.log(post3.title);
      const post1 = await deletePost();
      console.log(post1.title);
      const empty = await deletePost();
      console.log(empty);
    } catch (error) {
      console.log(error);
    }
  }
  
  run();*/



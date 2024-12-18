// const  h3 =document.querySelector('h3');
// const next=document.querySelector('.lcons i');
// const image=document.querySelector('img');
// const  citys=document.querySelector('.text-contanier p span')
// console.log(citys)

// console.log( next)

// console.log(h3)



//  const   fetchapi = async ()=>{
// try {
//     const factt = await fetch('https://randomuser.me/api/');
//  const response= await factt.json()
//  console.log(response)


// const  mathfucation= Math.floor(Math.random()*response.results.length)
// // const  city =response.users[mathfucation].address.city
// // console.log(city)
//  const firstNames =response.results[mathfucation].name.first
//  console.log(firstNames)
// //  const lastNames =response.users[mathfucation].lastName
// //   const imgeurl= await response.users[mathfucation].image

// //   citys.innerHTML=`${city}`
// // if(imgeurl){

// // image.setAttribute('src',imgeurl)
// // h3.innerHTML=`${firstNames}  ${lastNames} `
// //  }

// //  else{
// // console.log('imgeurl none')
// //  }


// } 
// catch (error) {
// console.log('error') 
// }





//  }



//  next.addEventListener('click', fetchapi);

//  fetchapi()




const h3 = document.querySelector('h3');
const next = document.querySelector('.lcons i');
const image = document.querySelector('img');
const citys = document.querySelector('.text-contanier p span');
const button=document.querySelector('button');
const h4 =document.querySelector('h4');


console.log(citys);
console.log(next);
console.log(h3);

const fetchapi = async (e) => {
    

  try {
    const factt = await fetch('https://randomuser.me/api/');
    const response = await factt.json();
    console.log(response);

    const mathfucation = Math.floor(Math.random() * response.results.length);
  console.log(mathfucation)
    const user = response.results[mathfucation];
console.log(user)

    const city = user.location.city;
    const firstName = user.name.first;
   const contactnumber=user.phone
   console.log(contactnumber)
   h4.innerHTML=`${contactnumber}`
    const lastName = user.name.last;
    const imageUrl = user.picture.large;

    citys.innerHTML = city;
    h4.style.display = 'none';
    if(image){
    image.setAttribute('src', imageUrl);
    // h3.first.style.fontSize='22px';
    
    h3.innerHTML = `${firstName} ${lastName}`;}
    else{
        console.log('imge url issue')
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};


next.addEventListener('click', fetchapi);



fetchapi()









// const next2 = document.querySelector('.right');
// const next1 = async () => {
//   console.log('dsfas')
//     const h3 = document.querySelector('h3');
//     const image = document.querySelector('img');
//     const citys = document.querySelector('.text-contanier p span');
//     console.log(citys);
// console.log(next);
// console.log(h3);
//   try {
//     const factt = await fetch('https://randomuser.me/api/');
//     const response = await factt.json();
//     console.log(response);
//     const contactnumber=user.phone
//     console.log(contactnumber)
//     h4.innerHTML=`+91${contactnumber}`
//     const mathfucation = Math.floor(Math.random() * response.results.length);
//   console.log(mathfucation)
//     const user = response.results[mathfucation-1];
// console.log(user)
//     const city = user.location.city;
//     const firstName = user.name.first;
   
//     const lastName = user.name.last;
//     const imageUrl = user.picture.large;

//     citys.innerHTML = city;
//     h4.style.display = 'none';
//     if(image){
//     image.setAttribute('src', imageUrl);
//     // h3.first.style.fontSize='22px';
    
//     h3.innerHTML = `${firstName} ${lastName}`;}
//     else{
//         console.log('imge url issue')
//     }
//   } catch (error) {
//     console.log('Error fetching data:', error);
//   }
// };


// next2.addEventListener('click', next1);








const next2 = document.querySelector('.right');
const next1 = async () => {
  // console.log('Button clicked!');
  const h3 = document.querySelector('h3');
  const image = document.querySelector('img');
  const citys = document.querySelector('.text-contanier p span');
  const h4 = document.querySelector('h4'); 

  try {
    const factt = await fetch('https://randomuser.me/api/');
    const response = await factt.json();
    // console.log('API Response:', response);

  
    const mathfucation = Math.floor(Math.random() * response.results.length);
    const user = response.results[mathfucation] ;
    console.log('Random User:', user);

    const contactNumber = user.phone;
    const city = user.location.city;
    const firstName = user.name.first;
    const lastName = user.name.last;
    const imageUrl = user.picture.large;

  
    if (citys) 
      {citys.innerHTML = city;}
    if (h4) {
      h4.innerHTML = `+91${contactNumber}`;
      h4.style.display = 'none';
    }
    if (image) {
      image.setAttribute('src', imageUrl);
      h3.innerHTML = `${firstName} ${lastName}`;
    } else {
      console.log('Image URL issue');
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

next2.addEventListener('click', next1);





const sowlist=()=>{
    if (h4.style.display === 'none' || h4.style.display === '') {
        h4.style.display = 'block';
      } else {
        h4.style.display = 'none';
      }
}

button.addEventListener('click',sowlist)




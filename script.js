// day1
const showMenuBtn = document.querySelector('.showMenuBtn');
const pageLinks = document.querySelector('.nav-container');
const closeBtn = document.querySelector('.close');
const navLink = document.querySelectorAll('.nav-link');

showMenuBtn.addEventListener('click',()=>{
    pageLinks.style.display = "flex";
});

closeBtn.addEventListener('click', ()=>{
    pageLinks.style.display= "none";
});

for (i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', () => {
        pageLinks.style.display = "none";
    })
}

// day2
const contactDiv = document.querySelector('.contactSection');

const data = [
    {
        name:"Keeping track of hundreds of components1",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript','Bootstrap','Terminal','Codepen'],

    },
    {
        name:"Keeping track of hundreds of components2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript'],

    },
    {
        name:"Keeping track of hundreds of components3",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript','Bootstrap','Terminal','Codepen'],

    },
    {
        name:"Keeping track of hundreds of components4",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github'],

    },
    {
        name:"Keeping track of hundreds of components5",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript'],

    },
    {
        name:"Keeping track of hundreds of components6",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"./img/feauted_imgs/projectImg.png",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript','Bootstrap','Terminal','Codepen'],

    }

];
      
function createCardUI(index){
    popupCover.classList.add('open');
    const cardHolder = document.querySelector('.showCard');
    cardHolder.innerHTML= `<div class="projectCard">
    <span class="close-card"><i class="fa-solid fa-x fa close-popup"></i></span>
    <div class="featured-bgcover">
       <img src="${data[index].featured_img}"/>
    </div>
    <div class="featured-titles">
        <h3 class="projectTitle">
           ${data[index].name}
        </h3>
        <div class="demo-links">
            <a href="${data[0].linkversion_link}"><img src="./img/feauted_imgs/seelive.png" alt="" class="demo-link"></a>
            <a href="${data[0].sourceCode_link}"><img src="./img/feauted_imgs/sourceCode.png" alt="" class="demo-link"></a>
        </div>
    </div>
    <ul class="skill-sets">
        ${data[index].technologies.map(tech=>`<li class="skill-set">${tech}</li>`).join('')}
     </ul>
    <p class="featured-description">
        ${data[index].description}
    </p>
    <div class="demo-links-small-screen">
        <a href=${data[0].linkversion_link} class="small-screen-link">See Live <i class="fa-solid fa-paper-plane fa"></i></a>
        <a href=${data[0].sourceCode_link} class="small-screen-link">See Source <i class="fa-brands fa-github fa"></i></a>  
    </div>
</div>`;
const closeCard = document.querySelector('.close-popup');
closeCard.addEventListener('click',()=>{
    popupCover.classList.remove('open');
    cardHolder.innerHTML="";
    console.log('close  card');
}) 
};



const showProjectBtns = Array.from(document.querySelectorAll('.seeProjectsBtn'));
for(let i=0;i<showProjectBtns.length;i++){
    showProjectBtns[i].addEventListener('click',()=>{
        createCardUI(i);
    })
}

// day3 form validation
//------------------------------------------
const form  = document.querySelector('.form');
const submitBtn = document.querySelector('.submit_btn');
const errMessage = document.querySelector('.err-msg');
const resetBtn  = document.querySelector('.reset_btn');
// taking values
const firstName = document.querySelector('.first-name');
const lastName= document.querySelector('.last-name');
const comments = document.querySelector('.message');
const email= document.querySelector('.email-address');
function takeValuesfromInput(){
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const commentsValue = comments.value;
    const emailValue = email.value;
    return { firstNameValue,lastNameValue,commentsValue,emailValue };
}
// SHOW ERRO FUNCTION
function showEror(message,displayStyle){
    const errHolder = document.createElement('p');
    errHolder.classList="err-msg";
    errHolder.innerHTML=message;
    errHolder.style.display=displayStyle;
    form.appendChild(errHolder);
    setTimeout(() => {
        errHolder.style.display='none';
    }, 3000);
}
function clearForm(){
    firstName.value='';
    lastName.value='';
    comments.value='';
    email.value='';
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   console.log('sumbit');
    // take values
    const {firstNameValue,lastNameValue,commentsValue,emailValue} = takeValuesfromInput(); 
    saveInLocalStorage('data',{firstNameValue,lastNameValue,commentsValue,emailValue});
    const urEmail = emailValue.toLowerCase();
    console.log(urEmail,emailValue);
    if(emailValue!==urEmail){
        showEror("Email should be in lower case","block");
    }
    else if( firstNameValue==""||lastName==""||commentsValue==""||emailValue=="" ){
        showEror("Inputs shouldn't be empty!","block");
        console.log('eror');
    }
    else{
        console.log('err');
    }
    // clear input
    clearForm();
})
// day 4 local stroage
function saveInLocalStorage(keyname,infos){
    localStorage.setItem(keyname,JSON.stringify(infos));
}
function deleteDataFromStorage(){
    localStorage.removeItem(data);
}
function checkingDataExistence(){
    const storedDatas=localStorage.getItem('data');
    if(storedDatas){
        const infos = JSON.parse(storedDatas);
        firstName.value=infos.firstNameValue;
        lastName.value=infos.lastNameValue;
        email.value=infos.emailValue;
        comments.value=infos.commentsValue;
        console.log(infos.firstNameValue);
    }
    else{
        const {...datas} = takeValuesfromInput(); 
        saveInLocalStorage('data',{...datas});
        console.log('no data');
    }
}
// delete data in localstroage
resetBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    clearForm();
    localStorage.removeItem('data');
})
// const contactCover = document.querySelector('.contactSection');
const popupCover = document.querySelector('.show-popup');
function createElement(){
    const card = document.createElement('div');
    card.classList='showCard';
    popupCover.append(card);

}
// download resume
const downloadFile = document.querySelector('.downloadResume');
downloadFile.addEventListener('click',()=>{
    window.open("./README.md");
})
window.addEventListener('DOMContentLoaded',()=>{
    checkingDataExistence();
    createElement();
   
   
});

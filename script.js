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
const data = [{
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"",
        linkversion_link:"https://newt27.github.io/Portfolio-setup_and_mobile_first/",
        sourceCode_link:"https://github.com/Newt27/Portfolio-setup_and_mobile_first",
        technologies:['CodeKit','Github','JavaScript','Bootstrap','Terminal','Codepen'],

    }
];
const showCardDiv = document.querySelector('.showCard');
function createCardUI(){
    showCardDiv.innerHTML= `<div class="projectCard">
    <span class="close__card"><i class="fa-solid fa-x fa close_popup"></i></span>
    <div class="feautred_bgcover">
        <img src="./img/feauted_imgs/projectImg.png">  
        </img>
     </div>
     
    <div class="featured_titles">
        <h3 class="projectTitle">
           ${data[0].name}
        </h3>
        <div class="demo_links">
            <a href="${data[0].linkversion_link}"><img src="./img/feauted_imgs/seelive.png" alt="" class="demo_link"></a>
            <a href="${data[0].sourceCode_link}"><img src="./img/feauted_imgs/sourceCode.png" alt="" class="demo_link"></a>  
        </div>
        
    </div>
    <ul class="skill_sets">
        ${data[0].technologies.map(tech=>`<li class="skill_set">${tech}</li>`).join('')}
     </ul>
    
   
    <p class="featured__description">
        ${data[0].description}
    </p>
    <div class="demo_links_small_screen">
        <a href=${data[0].linkversion_link} class="small-screen-link">See Live <i class="fa-solid fa-paper-plane fa"></i></a>
        <a href=${data[0].sourceCode_link} class="small-screen-link">See Source <i class="fa-brands fa-github fa"></i></a>  
    </div>
</div>`;
const closeCard = document.querySelector('.close_popup');
closeCard.addEventListener('click',()=>{
  showCardDiv.innerHTML="";
    console.log('close  card');
}) 
};
const showProjectBtns = Array.from(document.querySelectorAll('.seeProjectsBtn'));
for(const showProjectBtn of showProjectBtns){
    showProjectBtn.addEventListener('click',createCardUI)
};
// day3 form validation
//------------------------------------------
const form  = document.querySelector('.form');
const submitBtn = document.querySelector('.submit_btn');
const errMessage = document.querySelector('.err-msg');
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
function resetForm(){
    firstName.value='';
    lastName.value='';
    comments.value='';
    email.value='';
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   console.log('sumbit');
    // take values
    const {firstNameValue,lastName,commentsValue,emailValue} = takeValuesfromInput();
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
   resetForm();
})
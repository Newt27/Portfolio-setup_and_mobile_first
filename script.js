// day1
const showMenuBtn = document.querySelector('.showMenuBtn');
const pageLinks = document.querySelector('.nav-container');
showMenuBtn.addEventListener('click',()=>{
    pageLinks.classList.toggle('nav-toogler');
    console.log("clicked");
})
// day2
const data = [{
        name:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featured_img:"",
        linkversion_link:"",
        sourceCode_link:"",
        technologies:['CodeKit','Github','JavaScript','Bootstrap','Terminal','Codepen'],

    }
];
const showCardDiv = document.querySelector('.showCard');
function createCardUI(){
    showCardDiv.innerHTML= `<div class="projectCard">
    <span class="close__card"><i class="fa fa-bars close_popup"></i></span>
    <div class="feautred_bgcover">
       
    </div>
    <div class="featured_titles">
        <h3 class="projectTitle">
           ${data[0].name}
        </h3>
        <div class="demo_links">
            <a href=""><img src="./img/feauted_imgs/seelive.png" alt="" class="demo_link"></a>
            <a href=""><img src="./img/feauted_imgs/sourceCode.png" alt="" class="demo_link"></a>
        </div>
    </div>
    <ul class="skill_sets">
        ${data[0].technologies.map(tech=>`<li class="skill_set">${tech}</li>`).join('')}
     </ul>
    
    
    <p class="featured__description">
        ${data[0].description}
    </p>
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
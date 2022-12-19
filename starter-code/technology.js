// technology page



const techBtns = document.querySelectorAll('.tech-btn')


techBtns.forEach((techBtn)=>{
  techBtn.addEventListener('click', event => {
    let id = event.target.getAttribute('data-id');
   
    const techContents = document.querySelectorAll('.page-technology__content')
    techContents.forEach((techContent)=>{
      contentId = techContent.getAttribute('data-id');
      if(id == contentId){
        techContent.classList.add('active');
        techContent.classList.remove('disabled');
      } else{
         techContent.classList.remove('active');
         techContent.classList.add('disabled');

      }
    })
  })
  
})
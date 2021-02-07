// const portfolioContainer = document.querySelector('.swiper-wrapper')


// portfolioContainer.addEventListener('click', e => { 
   
//     e.preventDefault()
//     const modalToggle = e.target.getAttribute('href')
//     const prevButton = document.querySelector('.swiper-button-prev')
//     const nextButton = document.querySelector('.swiper-button-next')

//     const bol = ! modalToggle
     
//     //console.log(modalToggle)
//     if ( ! modalToggle) return
//     const find ='.'+modalToggle

//     const modal = document.querySelector(find)

//     const closeButton = modal.querySelector('.modal-close')
    
    
  
//    const modalOpen = _=>{ 
//         modal.classList.add('is-open')
    
//         prevButton.classList.add('is-open')
//         nextButton.classList.add('is-open')

//         modal.style.animation = 'modalIn 500ms forwards'
//         // document.body.style.overflowY = 'hidden'
       
        
//     }


// const modalClose = _=>{
//     modal.classList.remove('is-open')
//     prevButton.classList.remove('is-open')
//     nextButton.classList.remove('is-open')
//     modal.removeEventListener('animationend', modalClose)
    

// }

// closeButton.addEventListener('click', _ => {
        
//         modal.style.animation = 'modalOut 500ms forwards'
//         modal.addEventListener('animationend', modalClose)
//         document.body.style.overflowY ='scroll'
        
        
//     })

   
    
//     modalOpen()

// })


// document.addEventListener('keydown', e=>{
//     if (e.keycode === 27){
//         modal.style.animation = 'modalOut 500ms forwards'
//         modal.addEventListener('animationend', modalClose)
//         document.body.style.overflowY ='scroll'
//         console.log(e.keycode)
//     }
// })


// function openlink(obj){
//     var link = obj.href;
//     console.log(link);
//     window.open(
//         link,
//         '_blank' // <- This is what makes it open in a new window.
//       );

// }


const portfolioContainer = document.querySelector('.portfolio-items')


portfolioContainer.addEventListener('click', e => { 
    
    e.preventDefault()
    const modalToggle = e.target.closest('.portfolio-link')
    
    //console.log(modalToggle)
    if ( ! modalToggle) return
    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.modal-close')

   const modalOpen = _=>{ 
        modal.classList.add('is-open')
        modal.style.animation = 'modalIn 500ms forwards'
        document.body.style.overflowY = 'hidden'
    }


const modalClose = _=>{
    modal.classList.remove('is-open')
    modal.removeEventListener('animationend', modalClose)
    

}

closeButton.addEventListener('click', _ => {
        modal.style.animation = 'modalOut 500ms forwards'
        modal.addEventListener('animationend', modalClose)
        document.body.style.overflowY ='scroll'
        
        
    })

   
    
    modalOpen()

})


document.addEventListener('keydown', e=>{
    if (e.keycode === 27){
        modal.style.animation = 'modalOut 500ms forwards'
        modal.addEventListener('animationend', modalClose)
        document.body.style.overflowY ='scroll'
        console.log(e.keycode)
    }
})


function openlink(obj){
    var link = obj.href;
    console.log(link);
    window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );

}


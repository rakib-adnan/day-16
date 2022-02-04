const button = document.getElementById('apply');
const modal = document.querySelector('.modal-content');
const mclose = document.querySelector('.modal-header .close');
const aclose = document.querySelector('.alert-header .close');
const keep = document.querySelector('.alert-body .btns #keep');
const dis = document.querySelector('.alert-body .btns #dis');

const alert = document.querySelector('.alert-popup');


button.addEventListener('click', function(e){
    e.preventDefault();

    modal.classList.add('active');
});

mclose.addEventListener('click', function(){
    alert.style.display ='flex'
});

modal.addEventListener('click', function(e){
    if(e.target == this){
        modal.classList.remove('active');
    }
});

aclose.addEventListener('click', function(){
    alert.style.display='none';
});

keep.addEventListener('click', function(){
    alert.style.display='none';
});


dis.addEventListener('click', function(){
    alert.style.display='none';
    // modal.style.display='none';
    modal.classList.remove('active');


});


// accrodion//

const accrodions = document.querySelectorAll('.acc-header');


accrodions.forEach((vel) =>{
    vel.addEventListener('click', function(){
     vel.classList.toggle('active');
         
     if(vel.classList.contains('active')){
         vel.nextElementSibling.style.height = vel.nextElementSibling.scrollHeight + 'px ';     
     }else{
         vel.nextElementSibling.style.height = '0px'; 
     }
      
    });
 
 });

// accrodions.forEach(accordionItem  =>{
//     const currentlyAct = document.querySelector('.acc-header.active');
//     accordionItem.classList.toggle('active');
// })




    
    
    
    // accrodion.forEach(subAcco => {
    //     subAcco.classList.remove('active')
    // });
    // vel.classList.add('active');

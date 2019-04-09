// Your code goes here
const destinationBtn = document.querySelectorAll('.destination .btn');

for(let i = 0; i < destinationBtn.length; i++) {
destinationBtn[i].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    
});

destinationBtn[i].addEventListener('mouseover', (event) => {
    event.target.style.color = 'purple' ;  
});

destinationBtn[i].addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'silver';
    event.stopPropagation();
});


destinationBtn[i].addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'pink';
    event.stopPropagation();
});
}

window.addEventListener('resize', (event) => {
    alert('Wait.... NO STOP resizing me!');
});

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});

const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
});

const content = document.querySelector('.text-content h2');
content.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
    
});

const adv = document.querySelector('.text-content p');
adv.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '3rem';
    
});

const header3 = document.querySelector('.text-content h2');
header3.addEventListener('mouseout', (event) => {
    event.target.style.color = 'orange';
    
})

const aTag = document.querySelector('a');
aTag.addEventListener('click', function(event){
alert("Click on something else man...");
// This will prevent the form from submitting to action_page.php
 event.preventDefault();
});


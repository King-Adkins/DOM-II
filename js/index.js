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
    event.target.style.backgroundColor = 'pink';
});
}

window.addEventListener('resize', (event) => {
    alert('Wait.... NO STOP resizing me!');
});


console.log('Himanshu');
const op = document.querySelectorAll('.button');
const bro = document.querySelector('body');

op.forEach(function (button) {
    
    button.addEventListener('click', function (r) {
        if (r.target.id === 'grey') {
            bro.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'white') {
            bro.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'blue') {
            bro.style.backgroundColor = r.target.id;
        }
        if (r.target.id === 'yellow') {
            bro.style.backgroundColor = r.target.id;
        }
    });
});

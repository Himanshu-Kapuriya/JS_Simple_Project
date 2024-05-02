const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const hight = parseInt(document.querySelector('#height').value);
  const weigth = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (hight === '' || hight <= 0 || isNaN(hight)) {
    results.innerHTML='Plese Enter Valid Hight';
  } else if (weigth === '' || weigth <= 0 || isNaN(weigth)) {
    results.innerHTML='Plese Enter Valid weigth';
  } else {
    console.log(hight);
    console.log(weigth);
    const Rolex = (weigth / ((hight * hight) / 10000)).toFixed(2);
    
    if (Rolex < 18.6) {
      results.innerHTML = `You Are Underweight And your Rolex is <span>${Rolex}</span>`;
    } else if (Rolex >= 18.6 && Rolex <= 24.9) {
      results.innerHTML = `You Are in Normal Range And your Rolex is <span>${Rolex}</span>`;
    } else {
      results.innerHTML = `You Are Overweight And your Rolex is <span>${Rolex}</span>`;
    }
  }
});

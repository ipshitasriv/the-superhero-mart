document.querySelector('.main').style.display='none';
document.getElementById('loader').classList.add('loadSec');
document.getElementById('loaderDiv').classList.add('load');


setTimeout(()=>{
  document.getElementById('loader').classList.remove('loadSec');
  document.getElementById('loaderDiv').classList.remove('load');
  document.querySelector('.main').style.display = 'block';
},5000);
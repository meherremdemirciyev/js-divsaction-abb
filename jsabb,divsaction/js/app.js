let search = document.getElementById('axtaris');
let help = document.getElementById('help')
let x = document.getElementById('eks')
let language = document.getElementById('lang')
let flag = document.getElementById('flags')

search.addEventListener('click', function(e){
   e.preventDefault();
   help.classList.toggle('active');
   flag.classList.remove('active1');
})

x.addEventListener('click', function() {
    help.classList.remove('active');
})

language.addEventListener('click',function(e){
    e.preventDefault();
    flag.classList.toggle('active1');
    down.classList.toggle('active2')
})



//Action

// let boxes = document.getElementById('first')
// let box = document.getElementById('second')
// let t = 0;
// let r = 0;

// document.onkeydown = function(e){
//      if (e.key === 'ArrowRight') {
//         r+=10;
//         boxes.style.left = `${r}px`
//      }
//      else if(e.key === 'ArrowLeft'){
//         r-=10;
//         boxes.style.left = `${r}px`
//      }
//      else if(e.key === 'ArrowUp'){
//         t-=10;
//         boxes.style.top = `${t}px`
//      }
//      else if(e.key === 'ArrowDown'){
//         t+=10;
//         boxes.style.top = `${t}px`
//      }
// }

// if() {
//    box.style.backgroundColor = 'red';
// }
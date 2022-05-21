var head =document.querySelector('header');
var topup = document.querySelector('.topup');
var items = document.querySelectorAll('.super-div span');
var section = document.querySelector('#s3');
let MainImg = document.getElementById('mainimg');
let link = document.querySelector('.s6-div1 a')
let imges = document.querySelectorAll('.s6-div2 img');
let btn = document.querySelector('.s6-div1 button');

let div = document.querySelector('.changeColor');
let setting = document.querySelector('.setting');
let spans = document.querySelectorAll('span');
let root = document.querySelector(':root');
let video = document.querySelector('#s1 video');
let videos  = ['vedio/cover5.mp4','vedio/cover1.mp4','vedio/cover3.mp4'];

let mode = document.querySelector('.sett-div2 div i');
let modename = document.querySelector('.sett-div2 p');

let list = document.querySelector('header .head-i');
let listitem = document.querySelector('header ul');
let btn1 = document.querySelector('header ul button');

if(window.localStorage.getItem('color')){
   if(window.localStorage.getItem('color') == 'light'){
    modename.textContent = 'Dark Mode';
    root.style.setProperty('--subColor','black')
    root.style.setProperty('--subColor2','white')
   }else{
    modename.textContent = 'light Mode';
    root.style.setProperty('--subColor','white')
    root.style.setProperty('--subColor2','black')
   }

}
list.onclick = function() {
  listitem.classList.toggle('show1');
  
}
btn1.onclick = function() {
  listitem.classList.toggle('show1');  
}


mode.onclick = function (){
  if(mode.dataset.mod == 'Dark'){
    head.style.backgroundColor = 'white';
    mode.dataset.mod = 'light';
    window.localStorage.setItem('color',mode.dataset.mod);
    modename.textContent = 'Dark Mode';
    root.style.setProperty('--subColor','black')
    root.style.setProperty('--subColor2','white')
    
  }else{
    mode.dataset.mod = 'Dark';
    window.localStorage.setItem('color',mode.dataset.mod);
    head.style.backgroundColor = 'black';
    modename.textContent = 'light Mode';
    root.style.setProperty('--subColor','white')
    root.style.setProperty('--subColor2','black')

  }
}



setting.onclick = function (){
  div.classList.toggle('show')
}
spans.forEach(item => {
  item.style.backgroundColor = item.dataset.color ;
    item.onclick = function (){
        if(item.id == 0){
          video.src = videos[0];
        }if(item.id == 1){
          video.src = videos[1];
        }if(item.id == 2){
          video.src = videos[2];
        }
        root.style.setProperty('--mainColo',item.dataset.color)

    }
});


imges.forEach(img => {
  img.onmouseover = function(){

      MainImg.src = img.src;
      link.href = img.dataset.sourc;
      btn.style.opacity = '1';
    }
});

window.onscroll = function (){
    if(window.scrollY == 0){
      topup.style.display = 'none'
      head.style.backgroundColor = null;
    }else if(window.scrollY >= 70){
      topup.style.display = 'block'
      if(window.localStorage.getItem('color') == 'Dark'){
      head.style.backgroundColor = 'black';
      }else{
      head.style.backgroundColor = 'white';

      }
    }

    if(window.scrollY >= section.offsetTop -700){
      items.forEach(item => {
        item.style.width = item.dataset.width;
        item.textContent = item.dataset.width;
      });
    }else if(!(window.scrollY >= section.offsetTop -600)){
      items.forEach(item => {
        item.style.width = '0';
      });
    }
}




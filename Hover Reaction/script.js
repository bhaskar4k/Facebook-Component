let btn=document.getElementById('like');
let popup=document.getElementById('popup');

btn.addEventListener('click',()=>{
    if(popup.style.visibility==='hidden'){
        popup.style.visibility='visible';
        popup.style.top='70%';
        popup.style.left='20%';
    }else{
        popup.style.visibility='hidden';
        popup.style.top='75%';
        popup.style.left='20%';
    }
})
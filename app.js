const input=document.querySelector("#input");
const btn=document.querySelector("#btn");
const imgQR=document.querySelector("#imgQR");
const imgbox=document.querySelector("#img-box");
let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function Generator(){
    if(input.value.length > 0){
        imgQR.src=url+input.value;
        imgbox.classList.add("show-img");
    }
    else{
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error')
        },1000);
    }
    
}

btn.addEventListener("click",()=>{
    Generator();
})



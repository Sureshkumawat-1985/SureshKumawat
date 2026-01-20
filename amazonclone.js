let sign=document.querySelector(".Signpage");

let button=document.querySelectorAll("button");


   button.forEach((button)=> {

   
    button.addEventListener("click",()=>{
    //     button.innerText="If you Don't have any account on amazone then you can go this websitr - amazone.com(copy here)";
       window.location.href = "amazon_form.html";
    });

});


let see=document.querySelectorAll(".cardfirst  a");

see.forEach((link) =>{
   link.addEventListener("click",(event)=>{
   event.preventDefault();
   window.location.href="amazonSeemore.html";
});
})    


let address=document.querySelector(".address");

address.addEventListener("click", ()=>{
   window.location.href="location.html";
});

// let address=document.querySelector(".address");
// let hide=document.querySelector(".hide-box");

// address.addEventListener("click" , ()=>{
//    hide.classList.remove("display");
// });


// function applybutton(){
//    let pin=document.getElementById("pincode").value;
//    if(pin){
//       // document.querySelector(".locate").textContent=pin;
//       hide.classList.add("display");
//    }
//    else{
//       alert("Enter a valid pincode");
//    }
// }


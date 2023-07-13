
var input=document.querySelector(".display");
const ref_btn=document.querySelector("#refresh_btn");
const div_btn=document.querySelector("#btn_div");
const mul_btn=document.querySelector("#btn_mul");
const min_btn=document.querySelector("#btn_min");
const plus_btn=document.querySelector("#btn_plus");

const btn_1=document.querySelector("#btn_1");
const btn_2=document.querySelector("#btn_2");
const btn_3=document.querySelector("#btn_3");
const btn_4=document.querySelector("#btn_4");
const btn_5=document.querySelector("#btn_5");
const btn_6=document.querySelector("#btn_6");
const btn_7=document.querySelector("#btn_7");
const btn_8=document.querySelector("#btn_8");
const btn_9=document.querySelector("#btn_9");
const btn_0=document.querySelector("#btn_0");
const btn_equal=document.querySelector("#btn_equal");
const btn_dot=document.querySelector("#btn_dot");

btn_equal.style.backgroundColor="green";
btn_equal.style.borderColor="green";
div_btn.style.backgroundColor="red";
div_btn.style.backgroundColor="red";
mul_btn.style.backgroundColor="red";
mul_btn.style.backgroundColor="red";
min_btn.style.backgroundColor="red";
min_btn.style.backgroundColor="red";
plus_btn.style.backgroundColor="red";
plus_btn.style.backgroundColor="red";
ref_btn.style.backgroundColor="red";
ref_btn.style.borderColor="red";

btn_0.addEventListener("click",function(){
    let val=document.querySelector("#btn_0").value;
    console.log(val);
    display(val)
})
btn_1.addEventListener("click",function(){
    let val=document.querySelector("#btn_1").value;
    console.log(val); 
    display(val)
})
btn_2.addEventListener("click",function(){
    let val=document.querySelector("#btn_2").value;
    console.log(val);
    display(val) 
})
btn_3.addEventListener("click",function(){
    let val=document.querySelector("#btn_3").value;
    console.log(val);
    display(val)
})
btn_4.addEventListener("click",function(){
    let val=document.querySelector("#btn_4").value;
    console.log(val);
    display(val)
})
btn_5.addEventListener("click",function(){
    let val=document.querySelector("#btn_5").value;
    console.log(val);
    display(val)
})
btn_6.addEventListener("click",function(){
    let val=document.querySelector("#btn_6").value;
    console.log(val);
    display(val)
})
btn_7.addEventListener("click",function(){
    let val=document.querySelector("#btn_7").value;
    console.log(val);
    display(val)
})

btn_8.addEventListener("click",function(){
    let val=document.querySelector("#btn_8").value;
    console.log(val);
    display(val)
})

btn_9.addEventListener("click",function(){
    let val=document.querySelector("#btn_9").value;
    console.log(val);
    display(val)
})
btn_dot.addEventListener("click",function(){
    let val=document.querySelector("#btn_dot").value;
    console.log(val);
    display(val)
})
btn_equal.addEventListener("click",function(){
    var c=input.innerText;
    var result=eval(c);
    input.innerHTML=result;
    input.style.fontSize="32px";
    input.style.color="white";
    
})
ref_btn.addEventListener("click",function(){
    // let val=document.querySelector("#refresh_btn").value;
    input.innerHTML="";
   
     
})
div_btn.addEventListener("click",function(){
    let val=document.querySelector("#btn_div").value;
    console.log(val);
    display(val)   
})
mul_btn.addEventListener("click",function(){
    let val=document.querySelector("#btn_mul").value;
    console.log(val);
    display(val)   
})
min_btn.addEventListener("click",function(){
    let val=document.querySelector("#btn_min").value;
    console.log(val);   
    display(val)
})
plus_btn.addEventListener("click",function(){
    let val=document.querySelector("#btn_plus").value;
    console.log(val);  
    display(val)
})

function display(val){
     
    input.innerHTML+=val;

    input.style.fontSize="32px";
    input.style.color="white";

}



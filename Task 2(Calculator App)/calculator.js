const appendToDisplay = (val) => {
    let variable=document.querySelector("#display");
    if(variable.innerHTML==="0"){
        variable.innerHTML="";
    
    }
    variable.innerHTML += val;

};

const clearDisplay = () => {
    document.querySelector("#display").innerHTML ="0";
};

const clearLastElement = () => {
   let clear = document.querySelector("#display");
   clear.innerHTML = clear.innerHTML.slice(0,-1);
   if(clear.innerHTML===""){
    clearDisplay();
   }
};

const calculateResult = () => {
    let res=document.querySelector("#display");
    try{
        if(res.innerHTML.includes('/0')){
            throw Error("Cannot divide by 0");
        }
        res.innerHTML=eval(res.innerHTML);
    } catch (error){
        res.innerHTML= error.message;
    }
};

const square = () =>{
    let res=document.querySelector("#display")
    res.innerHTML = Math.pow(eval(res.innerHTML),2);
};

const cube = ()=>{
    let res=document.querySelector("#display")
    res.innerHTML = Math.pow(eval(res.innerHTML),3);
};

const squareroot = ()=>{
    let res=document.querySelector("#display")
    res.innerHTML = Math.sqrt(eval(res.innerHTML));
};

const cuberoot = () =>{
    let res=document.querySelector("#display")
    res.innerHTML = Math.cbrt(eval(res.innerHTML));
};
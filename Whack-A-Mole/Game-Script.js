const score=document.querySelector(".score span");
const holes=document.querySelectorAll(".hole");
const playBtn=document.querySelector(".Btn-Container .Begin");
const stopBtn=document.querySelector(".Btn-Container .Restore");
const animate=document.querySelector(".simple-animation");
//const startBtn=document.getElementByClassName("Begin");

let image2;
playBtn.addEventListener('click',()=>{
    let hole;
    let points=0;
    
     const startGame=setInterval(()=>{
        let arrayNum=Math.floor(Math.random()*9);
        hole=holes[arrayNum];
        
        let image=document.createElement("img");
        image.setAttribute("src", "Mole-Image.jpg");
        image.setAttribute("class","mole");
        
        image2=document.createElement("img");
        image2.setAttribute("src","artworks-000652710442-itqjg8-t500x500.jpg");
        image2.setAttribute("class","funny-animation");
        //startBtn.disabled="true";
        
        setTimeout(()=>{
            hole.removeChild(image);
        },600);
        hole.appendChild(image);
        
    },1000);
    
    window.addEventListener("click",(e)=>{
        if(e.target===hole)
        {
            score.innerText=++points;
                
        }
        
//        if(e.target!==hole)
//        {
//            animate.appendChild(image2);            
//        }
        
//         setTimeout(()=>{
//            animate.removeChild(image2);
//        },100);
        
    });
    playBtn.disabled=true;
    
        stopBtn.addEventListener("click",()=>{
        clearInterval(startGame); 
        score.innerText=0;
        playBtn.disabled=false;
    });
});



//const imageAnimation=setInterval(()=>{
//    window.addEventListener("click",(e)=>{
//        if(e.target!==hole)
//        {
//            let image=document.createElement("img");
//            image.setAttribute("src","artworks-000652710442-itqjg8-t500x500.jpg");
//            image.setAttribute("class","Animate");
//        }
//    })
//},300);


const randomColor = () => '#' + Math.random().toString(16).substr(-4);//toString takes input a radix(base)  
const changeColor = () => document.body.style.backgroundColor = randomColor();

setInterval(() => {
  changeColor();//changeColor() function is called for every 1.5sec
}, 1500);

// start color animation as soon as document is ready
//document.onreadystatechange = () => {
//  if (document.readyState === 'complete')
//  {
//    changeColor();
//  }
//}

//animate.removeChild(image2);
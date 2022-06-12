var img = document.querySelector('img');
const action = document.querySelector('.action');
const move = document.querySelector('.move');
const parent = document.querySelector('.parent');
const active = document.querySelector('.active');

img.addEventListener("mouseover", (e)=>{
    img.classList.add('zoom');
});

img.addEventListener("mouseleave", (e)=>{
    img.classList.remove('zoom');
});

let dx = 0, dy = 0,prevX, target, mousedown = false;

parent.addEventListener("mousedown", (e) => {
    mousedown = true;
    target = e.target.parentNode;
    childTarget = e.target;
    dx = parent.offsetLeft - e.clientX;
    dy = parent.offsetTop - e.clientY;
    
})

parent.addEventListener("mousemove" , (e) => {
    e.preventDefault();
    
    if(mousedown && move.checked && (target == parent || childTarget == parent )){
        if(target == parent){
            target.style.left = parseFloat(e.clientX + dx) + "px";
            if(active.checked){
                target.style.top = parseFloat(e.clientY + dy) + "px";
                active.textContent = "Stop vertical move";
            }
                
        }else{
            childTarget.style.left = parseFloat(e.clientX + dx) + "px";
            if(active.checked){
                childTarget.style.top = parseFloat(e.clientY + dy) + "px";
                active.textContent = "Stop vertical move";
            }
        }
    }
})

document.addEventListener("mouseup", (e) => {
    mousedown = false;
    target = null;
    childTarget = null;
    console.log("document mouseup");
    

})


action.addEventListener("click" ,() => {
    img.classList.toggle('show');
    action.textContent = (action.textContent == "Hideen image" ) ? "Show image" :"Hideen image";
});

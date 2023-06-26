const lis = document.querySelectorAll(".dragList li");
let draggingElementOrder;
let draggingElement;
let draggingElementPosition;
let animating;
for (let i=0; i < lis.length; i++){
    lis[i].setAttribute("draggable",true);
    lis[i].addEventListener("dragstart",(event)=>{
        draggingElement = event.target;
    });

    lis[i].addEventListener("dragover",(event)=>{
        draggingElementOrder = Array.from(draggingElement.parentElement.children).indexOf(draggingElement);
        const node = event.target;
        if (node !== draggingElement && !animating){
            draggingElementPosition = draggingElement.getBoundingClientRect();
            const order = Array.from(node.parentElement.children).indexOf(node);
            if (draggingElementOrder > order){
                node.parentElement.insertBefore(draggingElement, node);
            }
            else {
                if (node.nextElementSibling){
                    node.parentElement.insertBefore(draggingElement, node.nextElementSibling);
                }
                else {
                    node.parentElement.appendChild(draggingElement);
                }
            }
            const currentPosition = draggingElement.getBoundingClientRect();
            node.style.transform = `translateY(${currentPosition.y - draggingElementPosition.y}px)`;
            draggingElement.style.transform = `translateY(${-currentPosition.y + draggingElementPosition.y}px)`;
            animating=true;
            requestAnimationFrame(()=>{
                draggingElement.style.transition = "transform .1s linear";
                node.style.transition = "transform .1s linear";
                node.style.transform = "translateY(0)";
                draggingElement.style.transform = "translateY(0)";
                node.addEventListener("transitionend", transitionEnd);
            });

        }
    });
    function transitionEnd() {
        this.style.transform = null;
        this.style.transition = null;
        draggingElement.style.transform = null;
        draggingElement.style.transition = null;
        this.removeEventListener("transitionend", transitionEnd);
        animating = false;
    }
}

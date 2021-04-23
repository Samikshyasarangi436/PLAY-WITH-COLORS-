let element1 = document.querySelector('body') 
let width = element1.offsetWidth
let height = document.querySelector('html').clientHeight
const tap = (x=(Math.random()*1000%height),y=Math.random()*10000%width)=>{
    console.log(x,y)
    let element2 = document.createElement('div')
    element2.classList.add('circle')
    element2.style.backgroundColor = `rgb(${Math.random()*1000%255},${Math.random()*1000%255},${Math.random()*1000%255})`;
    element2.style.height= Math.random()*300 + 'px';
    element2.style.top= x + 'px';
    element2.style.width= element2.style.height
    element2.style.left= y + 'px';
    document.body.appendChild(element2)
}
element1.onclick = (e,ev)=>{
    console.log('hi')
    tap(e.clientY,e.clientX)
};
element1.onkeypress = (e,ev)=>{
    tap()
};

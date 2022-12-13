const getDim = () => {
    return window.innerWidth;
}


const navEle = document.getElementById("nav-btn");
const nav = document.getElementsByClassName("nav")[0];
const navList = document.getElementsByClassName("nav-collapse")[0];
const navIns = document.getElementsByClassName("nav-list")[0];

let show = true

navEle.addEventListener('click', (e)=>{
    if(getDim() > 950){
        return
    }
    if(show){
        navList.classList.replace("collapse", "collapsing")
        const timer1 = setTimeout(()=>{
            navList.style.height = `15rem`;
        },0)
        const timer2 = setTimeout(()=>{
            navList.classList.replace("collapsing", "collapse")  
            navList.classList.add("show")
            show=false;
        },500)
    }
    else{
        navList.style.height = navList.getBoundingClientRect().y;
        navList.classList.add("collapsing")
        navList.classList.remove("collapse")
        navList.classList.remove("show")
        navList.style.removeProperty('height')
        const timer1 = setTimeout(()=>{
            navList.classList.replace("collapsing", "collapse") 
            show=true;
        },500)
    }
})
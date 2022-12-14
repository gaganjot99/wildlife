const getDim = () => {
  return window.innerWidth;
};

const navEle = document.getElementById("nav-btn");
const nav = document.getElementsByClassName("nav")[0];
const navList = document.getElementsByClassName("nav-collapse")[0];
const navIns = document.getElementsByClassName("nav-list")[0];

let show = true;

navEle.addEventListener("click", (e) => {
  if (getDim() > 950) {
    return;
  }
  if (show) {
    navList.classList.replace("collapse", "collapsing");
    const timer1 = setTimeout(() => {
      navList.style.height = `15rem`;
    }, 0);
    const timer2 = setTimeout(() => {
      navList.classList.replace("collapsing", "collapse");
      navList.classList.add("show");
      show = false;
    }, 500);
  } else {
    navList.style.height = navList.getBoundingClientRect().y;
    navList.classList.add("collapsing");
    navList.classList.remove("collapse");
    navList.classList.remove("show");
    navList.style.removeProperty("height");
    const timer1 = setTimeout(() => {
      navList.classList.replace("collapsing", "collapse");
      show = true;
    }, 500);
  }
});

//functions to handle lazy loading of images

function scrollTrigger(selector) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    console.log("herre");
    addObserver(el);
  });
}
let observer = new IntersectionObserver(
  (entries, observer) => {
    // This takes a callback function that receives two arguments: the elements list and the observer instance.
    //console.log("outside");
    entries.forEach((entry) => {
      //console.log("topof");
      // `entry.isIntersecting` will be true if the element is visible
      if (entry.isIntersecting) {
        //console.log("inside");

        entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
        // We are removing the observer from the element after adding the active class
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "-100px",
  }
);
function addObserver(el) {
  // We are creating a new IntersectionObserver instance
  // Adding the observer to the element
  observer.observe(el);
}

document.addEventListener("DOMContentLoaded", () => {
  scrollTrigger(".lazy-img");
});

let menu = document.querySelector(".menu");
let tabNames = menu.querySelectorAll("a");
let tabParent = document.querySelector(".tabs");
let tabs = tabParent.querySelectorAll(".tab");

for (let tabName of tabNames) {
  tabName.addEventListener("click", func)
}

function func() {
  
  //remove active class
  for (let tabName of tabNames) {
    if (tabName.classList.contains("active")) {
      tabName.classList.remove("active")
    }
  }
  //add active to target
  this.classList.add("active");
  //find index of active
  let index;
  for (let i = 0; i < tabNames.length; i++) {
    if (tabNames[i].classList.contains("active")) {
      index = i
    }
  }

  //remove active class from tab
  for (let tab of tabs) {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active")
    }
  }
  //add active to  tab
  tabs[index].classList.add("active");
 
}
  


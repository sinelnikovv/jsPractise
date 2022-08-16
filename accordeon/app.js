let parent = document.querySelector("#parent");
let links = parent.querySelectorAll(".tab .link a");

for (let link of links) {
  link.addEventListener("click", function (e) {
    //remove active class
    let activeTab = parent.querySelector(".tab.active");
    if (activeTab) {
      activeTab.classList.remove("active");
    }
  
  //add active to target
    let newTab = link.closest(".tab");
    if (newTab !== activeTab) {
      newTab.classList.add("active");
    }
  })
}


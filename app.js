const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  // Button Click Active Class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // Section Active Class
  allSections.addEventListener("click", (e) => {
    console.log(e.target);

    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other button
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // Toggle theme 

  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
  })

}

PageTransitions();

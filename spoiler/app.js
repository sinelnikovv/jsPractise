//spoiler

let togglers = document.querySelectorAll('.toggle');

for (let toggle of togglers) {
    toggle.addEventListener('click', function () {
        let content = this.parentElement.nextElementSibling;
        content.classList.toggle('active');
    }
  );
}

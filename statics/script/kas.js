const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((btn) => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 20px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "15px 20px";
        }
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        alert('You are about to visit: ' + this.innerText);
    });
});

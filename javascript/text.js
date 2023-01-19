

const sections = document.querySelectorAll('.general-wrapper');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '70px',
}

const observer = new IntersectionObserver(function(entries , observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        entry.target.classList.toggle('show-wrappers');
        observer.unobserve(entry.target);
    });

},options);

sections.forEach(section => {
    observer.observe(section);
});




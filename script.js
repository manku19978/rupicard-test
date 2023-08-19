const feats = document.querySelectorAll('.animatingFeats')

const observerOptions = {
    root: null, 
    threshold: 0.2, 
};

const animateInCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target); 
      }
    });
};

const observer = new IntersectionObserver(animateInCallback, observerOptions);

feats.forEach(element => {
  observer.observe(element);
});




const arrow = document.querySelectorAll('.arrow')

const arrowobserverOptions = {
    root: null, 
    threshold: 0.2, 
};

const arrowanimateInCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('arrow-animate-visible');
        observer.unobserve(entry.target); 
      }
    });
};

const arrowobserver = new IntersectionObserver(arrowanimateInCallback, arrowobserverOptions);

arrow.forEach(element => {
  observer.observe(element);
});



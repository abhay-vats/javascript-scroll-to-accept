// Select elements
const terms = document.querySelector('.terms-and-conditions');
const lastElement = terms.lastElementChild;
const button = document.querySelector('.accept');

// Setup observer callback
const observerCallback = (payload) => {
  const { isIntersecting } = payload[0];

  if (isIntersecting) {
    button.disabled = false;
    observer.unobserve(lastElement);
  }
};

// Setup observer
const observer = new IntersectionObserver(observerCallback);

// Start observing an element
observer.observe(lastElement);

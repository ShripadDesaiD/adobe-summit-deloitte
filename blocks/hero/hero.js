function handleLinkInH1() {
  const h1a = document.querySelector('.section.hero-container .hero-wrapper .hero h1 a');
  const secondHeroBanner = document.querySelector('.section.hero-container .hero-wrapper .hero h1 strong');
  if (h1a) {
    const h1aElement = h1a.outerHTML;
    const h1Element = h1a.parentElement;
    h1a.remove();
    h1Element.outerHTML += h1aElement;
  }

  if (secondHeroBanner) {
    const heroSectionDiv = secondHeroBanner.closest('.section.hero-container');
    // const e = document.createElement('div');
    // e.innerHTML = secondHeroBanner.parentElement.outerHTML;
    // secondHeroBanner.parentElement.outerHTML = e.outerHTML;
    heroSectionDiv.classList.add('hero-container-2');
  }
}

handleLinkInH1();

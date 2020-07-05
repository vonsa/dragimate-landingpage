import { Elements } from './Modules/Elements';

/*
  DEMO purposes
*/

/* DECLARE ANIMATION PROPERTIES */

const aniObject = [
  {
    transform: 'rotateX',
    initialValue: 25,
  },
  {
    transform: 'rotateY',
    initialValue: 25,
  },
  {
    transform: 'rotateZ',
  },
  {
    transform: 'translateX',
  },
  {
    transform: 'translateY',
  },
  {
    transform: 'translateZ',
  },
];

/*
  - Initialize app
  - Create and store 2 Element Classes
 */
let app;
let newElement;

// Demo not available on mobile devices
if (window.innerWidth > 800) {
  // Timeout used for demo purposes
  setTimeout((e) => {
    app = new Elements();
    newElement = app.create('.first', aniObject);
    demo();
  }, 2601);

  // letters
  const spans = document.querySelectorAll('.title--animated span');

  // buttons
  const rX = document.getElementById('rotateX');
  const rY = document.getElementById('rotateY');
  const rZ = document.getElementById('rotateZ');
  const tX = document.getElementById('translateX');
  const tY = document.getElementById('translateY');
  const tZ = document.getElementById('translateZ');

  function initialise() {
    spans.forEach((el) => {
      el.setAttribute('data-letter', el.textContent);
    });
  }

  initialise();

  function demo() {
    for (const transform in newElement.transforms) {
      newElement.transforms[transform].active = false;
    }

    rX.addEventListener('click', (e) => {
      newElement.transforms['rotateX'].active = newElement.transforms['rotateX']
        .active
        ? false
        : true;
    });
    rY.addEventListener('click', (e) => {
      newElement.transforms['rotateY'].active = newElement.transforms['rotateY']
        .active
        ? false
        : true;
    });
    rZ.addEventListener('click', (e) => {
      newElement.transforms['rotateZ'].active = newElement.transforms['rotateZ']
        .active
        ? false
        : true;
    });
    tX.addEventListener('click', (e) => {
      newElement.transforms['translateX'].active = newElement.transforms[
        'translateX'
      ].active
        ? false
        : true;
    });
    tY.addEventListener('click', (e) => {
      newElement.transforms['translateY'].active = newElement.transforms[
        'translateY'
      ].active
        ? false
        : true;
    });
    tZ.addEventListener('click', (e) => {
      newElement.transforms['translateZ'].active = newElement.transforms[
        'translateZ'
      ].active
        ? false
        : true;
    });

    rX.click();
    rY.click();
  }
} else {
  // Fallback for mobile devices
  const config = document.querySelector('.section.config');
  config.innerHTML = `<h1 class="heading--secondary demo__unavailable">This demo is not available on mobile devices. Please use a different device.</h1>`;
}

setTimeout((e) => {
  // Activate phone message animation after intro animation has concluded
  const message = document.querySelector('.phone__message-container');
  message.style.animation = 'mobileMessage 3s ease-in-out infinite alternate';
}, 1000);

// const caruosels = document.querySelectorAll('div[data-ride]')
// // console.log(caruosel)

// const inners = Array.from(caruosels).map((carousel) => carousel.querySelector('.carousel-inner'))
// // console.log(inners);

// const carouselItems = inners.map((item) => item.childNodes);
// // console.log(carouselItems[0]);
// // console.log(carouselItems[1]);

// const controls = Array.from(caruosels).map((carousel) => carousel.querySelectorAll('a[data-slide]'))
// // console.log(controls);

// controls.forEach(([prev, next]) => {
//   // console.log(prev, next);

//   next.addEventListener('click', (e) => {
//     const target = e.target;
//     const slides = target.closest('div[data-ride]');
//     console.log(slides.id);
      
//     const activeSlide = slides.querySelector('.active');
//         console.log(activeSlide)

//     activeSlide.classList.remove('active')
      
//     const nextSlide = activeSlide.nextElementSibling;
//     nextSlide.classList.add('active');

    

//   })

//     prev.addEventListener('click', (e) => {
//     const target = e.target;
//     const slides = target.closest('div[data-ride]');
//     console.log(slides.id);
      
//     const activeSlide = slides.querySelector('.active');
//         console.log(activeSlide)

//     activeSlide.classList.remove('active')
      
//     const prevSlide = activeSlide.previousElementSibling;
//     prevSlide.classList.add('active');

    

//   })
  

  
// })



// // @ts-check

// import $ from 'jquery';

// export default () => {
//   // BEGIN (write your solution here)
//   const controls = document.querySelectorAll('a[data-slide]');

//   const handler = (e) => {
//     const target = e.target;
//     const inner = target.closest('div[data-ride]');
//     const activeSlide = inner.querySelector('.active');

//     const slides = Array.from(inner.querySelectorAll('.carousel-item'));

//     const firstSlide = slides[0];
//     const lastSlide = slides.at(-1);

//     const nextSlide = activeSlide.nextElementSibling ?? firstSlide;
//     const prevSlide = activeSlide.previousElementSibling ?? lastSlide;

//     const goingNext = target.parentNode.dataset.slide === 'next';
//     const goingPrev = target.parentNode.dataset.slide === 'prev';

//     const nextActiveSlide = goingPrev ? prevSlide : nextSlide


//     activeSlide.classList.remove('active');
//     nextActiveSlide.classList.add('active');
//   }

//   controls.forEach((control) => {
//     control.addEventListener('click', handler);
//   });

//   // END
// };







// // @ts-check

// import $ from 'jquery';

// export default () => {
//   // BEGIN (write your solution here)
//     const controls = document.querySelectorAll('a[data-slide]');

//   const handler = (e) => {
//     const target = e.target;
//     const inner = target.closest('div[data-ride]');
//     const activeSlide = inner.querySelector('.active');

//     const slides = Array.from(inner.querySelectorAll('.carousel-item'));

//     const firstSlide = slides[0];
//     const lastSlide = slides.at(-1);

//     const nextSlide = activeSlide.nextElementSibling ?? firstSlide;
//     const prevSlide = activeSlide.previousElementSibling ?? lastSlide;

//     const goingNext = target.parentNode.dataset.slide === 'next';
//     const goingPrev = target.parentNode.dataset.slide === 'prev';

//     // const nextActiveSlide = goingNext ? nextSlide : prevSlide;
//     const nextActiveSlide = goingPrev ? prevSlide : nextSlide;

//     console.log(nextActiveSlide.className)
//     console.log(nextActiveSlide)


//     activeSlide.classList.remove('active');
//     nextActiveSlide.classList.add('active');
//   }

//   controls.forEach((control) => {
//     console.log(control)
//     control.addEventListener('click', handler);
//   });

//   // END
// };






// // @ts-check

// import $ from 'jquery';

// export default () => {
//   // BEGIN (write your solution here)
//     const controls = document.querySelectorAll('a[data-slide]');

//   controls.forEach((control) => {
//     control.addEventListener('click', (e) => {
//     const target = e.target;
//     const inner = target.closest('div[data-ride]');
//     const activeSlide = inner.querySelector('.active');

//     const slides = Array.from(inner.querySelectorAll('.carousel-item'));

//     const firstSlide = slides[0];
//     const lastSlide = slides.at(-1);

//     const nextSlide = activeSlide.nextElementSibling ?? firstSlide;
//     const prevSlide = activeSlide.previousElementSibling ?? lastSlide;

//     console.log('nextSlide', nextSlide)
//     console.log('prevSlide', prevSlide)

//     const goingNext = target.parentNode.dataset.slide === 'next';
//     const goingPrev = target.parentNode.dataset.slide === 'prev';

//     const nextActiveSlide = goingNext ? nextSlide : prevSlide;
//     // const nextActiveSlide = goingPrev ? prevSlide : nextSlide;

//     const gener = (direction) => {
//       console.log('direction', direction)
//       console.log('direction', direction === 'next')
//       direction === 'next' ? nextSlide.classList.add('active') : prevSlide.classList.add('active');
//       console.log(nextSlide.className)
//       console.log(prevSlide.className)
//     }

//     // console.log('className', nextActiveSlide.className)


//     activeSlide.classList.remove('active');
//     gener(target.parentNode.dataset.slide)
//         // goingPrev || goingNext ? prevSlide.classList.add('active') : nextSlide.classList.add('active');

//     // nextActiveSlide.classList.add('active');
//         // console.log('nextActiveSlide', nextActiveSlide)

//   }
// );
//   });

//   // END
// };


console.log(
  /aa/.test('aa aa aa')
)


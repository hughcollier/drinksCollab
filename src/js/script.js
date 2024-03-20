gsap.registerPlugin(MotionPathPlugin)

// General utility animation which fades in and up.
// Can be used on any element by adding a class of "animate-in-up"

const elementsToAnimateUpAndIn = document.querySelectorAll('.animate-in-up')
if (elementsToAnimateUpAndIn) {
  let i = 0

  elementsToAnimateUpAndIn.forEach(element => {
    uniqieAnimationClass = 'animate-in-up-' + i
    element.classList.add(uniqieAnimationClass)
    gsap.from('.' + uniqieAnimationClass, {
      scrollTrigger: {
        trigger: '.' + uniqieAnimationClass,
        // markers: true,
        start: 'top 75%',
      },
      duration: 2,
      y: 60,
      opacity: 0,
      ease: 'expo.out',
    })
    i++
  })
}

// Add correct amount of negative margin to three drinks illustration to ensure section overlap

window.onload = function () {
  const threeDrinksHeight = document.querySelector('.three-drinks').offsetHeight
  console.log(threeDrinksHeight)
  let threeDrinksMarginTop = `-${threeDrinksHeight / 1.5}px`
  console.log(threeDrinksMarginTop)
  document.querySelector('.three-drinks').style.top = threeDrinksMarginTop
  document.querySelector('#intro p').style.top = threeDrinksMarginTop
}

// GASAP animations

const details = gsap.utils.toArray('.service:not(:first-child)')
const icons = gsap.utils.toArray('.service-icons>.icon:not(:first-child)')
console.log(icons)

gsap.set(icons, { yPercent: 101 })

const allIcons = gsap.utils.toArray('.service-icons>.icon')

details.forEach((detail, index) => {
  let headline = detail.querySelector('h2')
  let animation = gsap
    .timeline()
    .to(icons[index], { yPercent: 0 })
    .set(allIcons[index], { autoAlpha: 0 })

  ScrollTrigger.create({
    trigger: headline,
    start: 'top 80%',
    end: 'top 50%',
    animation: animation,
    scrub: true,
    // markers: true,
  })
})

ScrollTrigger.create({
  trigger: '#services',
  start: 'top top',
  end: 'bottom bottom',
  pin: '#right',
  // markers: true,
})

gsap.set('.big-drinks', {
  x: -900,
})

gsap.to('.big-drinks', {
  scrollTrigger: {
    trigger: '#intro',
    start: '10%,  center',
    // end: 'bottom, 75%',
    markers: true,
    scrub: 1,
  },
  x: 700,
})

gsap.from('.hero-text-animation', {
  duration: 1.5,
  translateX: 50,
  stagger: 0.25,
  opacity: 0,
  delay: 1,
  ease: 'expo.out',
})

gsap.from('.three-drinks', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 2.5,
})

gsap.from('#image-section li', {
  x: 100,
  duration: 1.5,
  ease: 'expo-out',

  scrollTrigger: {
    trigger: '#image-section',
    scrub: true,
  },
})

gsap.from('#image-section li img', {
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,

  scrollTrigger: {
    trigger: '#image-section',
  },
})

const letsGoImageAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: '.lets-go-image',
  },
})

// letsGoImageAnimation.from('.lets-go-image', {
//   opacity: 0,
//   duration: 5,
// })

letsGoImageAnimation.to('.lets-go-image', {
  repeat: -1,
  duration: 20,
  ease: 'none',
  motionPath: {
    path: '.path-for-gsap-motion-path',
    align: '.path-for-gsap-motion-path',
    autoRotate: false,
    alignOrigin: [0.5, 0.5],
  },
})

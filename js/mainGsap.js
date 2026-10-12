gsap.registerPlugin(ScrollTrigger);

gsap.from('.main_txt .pp_txt', {
  y: 80,
  opacity: 0,
  duration: 1.2,
});

gsap.from('.main_txt p', {
  y: -40,
  opacity: 0,
  delay: 0.8,
  duration: 1.2,
});

gsap.from('.clovers .clover .cloverImg img', {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out'
});

gsap.from('#about .profile_title > *', {
  scrollTrigger: {
    trigger: '#about .profile_title',
    start: 'top 80%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
});

gsap.from('#about .info_01 > div', {
  scrollTrigger: {
    trigger: '#about .info_01',
    start: 'top 80%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
});

gsap.from('#about .info_02 > *', {
  scrollTrigger: {
    trigger: '#about .info_02',
    start: 'top 80%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
});

gsap.fromTo('#about .skills .skill_box .skill > div', {
    y: 10,
    scale: 0.95,
    opacity: 0,
  },
  {
    scrollTrigger: {
    trigger: '#about .skill_box',
    start: 'top 80%',
  },
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 0.7,
  stagger: 0.08,
  ease: 'power2.out',
});

gsap.from('#projects .title', {
  scrollTrigger: {
    trigger: '#projects .title',
    start: 'bottom 80%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  stagger: 0.10,
});

gsap.from('#contact .hope', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top: 70%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
});

gsap.from('#contact .hope_02', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top: 70%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  delay: 0.15,
});

gsap.from('#contact .contact_txt > p', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top: 70%',
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  delay: 0.12,
});

gsap.from('#contact .contact_clover img', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top: 70%',
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.1,
  stagger: 0.12,
});
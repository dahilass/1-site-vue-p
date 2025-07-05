export const aboutSplideOptions = {
  type: 'loop',
  perMove: 1,
  perPage: 3,
  gap: '1rem',
  lazyLoad: 'nearby',
  pagination: true,
  keyboard: 'global',
  classes: {
    arrows: 'about__splider-controls',
    arrow: 'about__splider-arrow splider-arrow',
    prev: 'about__splider-arrow--prev splider-arrow--prev',
    next: 'about__splider-arrow--next splider-arrow--next',
    pagination: 'about__splider-pagination splider-pagination',
  },
  breakpoints: {
    1025: {
      perPage: 2,
    },
    500: {
      perPage: 1,
    },
  },
}

export const coachSplideOptions = {
  // type: 'fade',
  updateOnMove: true,
  perMove: 1,
  perPage: 4,
  speed: 500,
  rewind: false,
  // autoWidth: false,
  // autoHeight: true,
  // padding: '4rem',
  gap: '1rem',
  // fixedWidth: '42rem',
  lazyLoad: 'nearby',
  pagination: false,
  // focus: 'center',
  // keyboard: 'global',
  classes: {
    arrows: 'coach__splider-controls',
    arrow: 'coach__splider-arrow splider-arrow',
    prev: 'coach__splider-arrow--prev splider-arrow--prev',
    next: 'coach__splider-arrow--next splider-arrow--next',
  },
  breakpoints: {
    1200: {
      // focus: 'center',
      perPage: 3,
    },
    900: {
      // fixedWidth: '15rem',
      perPage: 2,
      // padding: '3rem',
    },
    600: {
      perPage: 1,
      // width: '80vw',
    }
  },
}

export const abonementSplideOptions = {
  perMove: 1,
  speed: 500,
  rewind: false,
  start: 0,
  // focus: 'center',
  // autoWidth: false,
  // autoHeight: true,
  // fixedHeight: '20rem',
  perPage: 5,
  gap: '1rem',
  // fixedWidth: '42rem',
  lazyLoad: 'nearby',
  pagination: false,
  arrows: false,
  drag: false,
  // focus: 'center',
  // keyboard: 'global',
  classes: {
    arrows: 'abonement__splider-controls',
    arrow: 'abonement__splider-arrow splider-arrow',
    prev: 'abonement__splider-arrow--prev splider-arrow--prev',
    next: 'abonement__splider-arrow--next splider-arrow--next',
    // pagination: 'abonement__splider-pagination splider-pagination',
  },
  breakpoints: {
    1200: {
      start: 1,
      arrows: true,
      // pagination: true,
      drag: true,
      perPage: 3,
    },
    1000: {
      // perPage: 3,
      // padding: '3rem',
    },
    620: {
      perPage: 2,
    },
    440: {
      start: 2,
      focus: 'center',
      // padding: '5rem',
      perPage: 1,
    },
  },
}

export const commentSplideOptions = {
  perMove: 1,
  speed: 1000,
  // autoWidth: true,
  // autoHeight: true,
  perPage: 1,
  // fixedWidth: '42rem',
  focus: 'center',
  gap: '15rem',
  // padding: '20%',
  lazyLoad: 'nearby',
  pagination: true,
  trimSpace: false,
  // keyboard: 'global',
  classes: {
    arrows: 'comments__splider-controls',
    arrow: 'comments__splider-arrow splider-arrow',
    prev: 'comments__splider-arrow--prev splider-arrow--prev',
    next: 'comments__splider-arrow--next splider-arrow--next',
    pagination: 'comments__splider-pagination splider-pagination',
  },
  breakpoints: {
    1000: {
      // padding: '10%',
    },
    768: {
      // padding: '5%',
    },
  },
}

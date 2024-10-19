const bannerSection = document.getElementsByClassName('banner-section');

const bannerSectionHeight = bannerSection[0].offsetHeight;

window.addEventListener('scroll', function() {
  if (pageYOffset > (bannerSectionHeight - 10) && pageYOffset < 1250) {
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').classList.remove('active')
  }
})
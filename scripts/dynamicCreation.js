for(i = 1; i < 17; i++){
    const saltDot = document.createElement('p');
    saltDot.setAttribute('class',`salt${i}`);
    saltDot.innerText = '.';
    document.querySelector('.salt').appendChild(saltDot);
}

const imageGrid = [
  {
    imageSrc: 'dogs/one.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/two.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/quince.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/four.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/fourteen.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/ten.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/eleven.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/sixteen.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/thirdteen.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/six.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/eight.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/seven.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/three.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/twelve.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  },
  {
    imageSrc: 'dogs/nine.jpg',
    altText:'Imagen de:',
    nombre:'Nicolas'
  }
];

for (let i = 0; i < imageGrid.length; i++){
  var modes = ['flip-up', 'flip-down', 'flip-left', 'flip-right'];
  var randMode = modes[Math.floor(Math.random() * modes.length)];
  const gridImage = document.createElement('img');
  document.querySelector('#photos').insertBefore(gridImage, document.querySelector('.foto-enfoque'));
  gridImage.setAttribute('src', `${imageGrid[i].imageSrc}`);
  gridImage.setAttribute('alt', `${imageGrid[i].altText} ${imageGrid[i].nombre}`);
  gridImage.setAttribute('data-aos', `${randMode}`);
  gridImage.setAttribute('data-aos-anchor-placement','center-center');
};


$('#historia-img-ocho').hover(function(e) {
  $('.comida-uno').addClass('visible');
})
$('#historia-img-nueve').hover(function(e) {
  $('.comida-cuatro').addClass('visible');
})
$('#historia-img-diez').hover(function(e) {
  $('.comida-tres').addClass('visible');
})
$('#historia-img-once').hover(function(e) {
  $('.comida-dos').addClass('visible');
})


$('#hamburger').click(function(e){
  $('li.nav').toggleClass('showing');
})

const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  mousewheel: {},
  effect: 'cube',
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
});

var blockMove = anime ({
    targets: '#block',
    translateX: -100,
    translateY: 300,
    autoplay: false,
    backgroundColor: '#dd9357',
    borderRadius: '50%',
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    rotate: '1turn'
});

document.querySelector ('.btn').onclick = blockMove.restart;

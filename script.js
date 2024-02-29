const body = document.getElementsByTagName('body')[0];

const keyframes = {
    backgroundColor: [
        '#f00',
        '#00f',
        '#0f0',        
    ]
};

const options = {
    duration: 2000,
    iterations: 'Infinity',
    direction: 'alternate',
};

body.animate(keyframes, options);
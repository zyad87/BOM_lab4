let buttons = document.querySelectorAll('button');
let input = document.querySelector('#input');



let resolutions = {
  button0: { width: 375, height: 667 },
  button1: { width: 412, height: 736 },
  button2: { width: 1024, height: 768 },
  button3: { width: 1920, height: 1080 },
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const { width, height } = resolutions[`button${index}`];
    window.open(input.value, '_blank', `width=${width},height=${height}`);
  });
});
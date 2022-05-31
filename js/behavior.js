let navButtons = document.getElementsByClassName('navbar_list-item');
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', () => {
    let value = navButtons[i].attributes.value.value;
    let header = document.getElementsByClassName('animated');
    setTimeout(() => {
      for (let j = 0; j < header.length; j++) {
        let actualClass = header[j].classList[0];
        console.log(actualClass);
        header[j].classList.replace(actualClass, `${actualClass}--start`);
      };
    }, 10);
  });
};
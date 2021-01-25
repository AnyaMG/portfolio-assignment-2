const expandButtonHandler = () => {
  const allExpandBtns = document.querySelectorAll('.expand-btn');

  allExpandBtns.forEach(btn => {
    btn.addEventListener('click',(e) => {
      if (e.target.innerText === '[+]') {
        e.target.nextElementSibling.style.display = 'block';
        e.target.innerText = '[-]';
      } else {
        e.target.nextElementSibling.style.display = 'none';
        e.target.innerText = '[+]';
      }
    });
  });
}

const main = () => {
  expandButtonHandler();
}

window.addEventListener('DOMContentLoaded', main);
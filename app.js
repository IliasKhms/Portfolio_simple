function redirection(){

  window.location.href = './mystere.html';
}



function menuMobile(){

    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
    const button = document.querySelector('.burger');

    button.addEventListener('click', ()=>{
        header.classList.toggle('show-nav');
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
          header.classList.remove('show-nav');
        });
      });
}

menuMobile();


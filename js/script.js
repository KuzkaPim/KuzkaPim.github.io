const modalContainer = document.querySelector('.modal_container'),
      modal = document.querySelector('.modal'),
      modalDevider = document.querySelector('.modal_devider'),
      modalBlock = document.querySelector('.modal_block'),
      modalBlockIn = document.querySelector('.modal_block_in'),
      modalBlockUp = document.querySelector('.modal_block_up'),
      modalBlockBtn = document.querySelector('.reg');

modalDevider.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        modalDevider.classList.toggle('second_red');
        modal.classList.toggle('first_red');
        modalBlock.classList.toggle('modal_block_left');
        modalBlockIn.classList.toggle('dn');
        modalBlockUp.classList.toggle('dn');
        modalBlockBtn.classList.toggle('second_red');
    }
});


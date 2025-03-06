document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.navigation');

  menuButton.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open');
    } else {
      navigation.classList.add('open');
    }
  });
});

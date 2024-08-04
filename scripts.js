document.addEventListener('DOMContentLoaded', function() {
    const backHomeBtn = document.getElementById('back-home');
    backHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main').classList.add('fade-out');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 500);
    });

    window.addEventListener('load', () => {
        document.querySelector('main').classList.remove('fade-out');
    });
});

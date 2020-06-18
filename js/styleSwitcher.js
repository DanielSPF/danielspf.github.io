
const links = document.querySelectorAll('.alternate-style'),
    totalLinks = links.length;

function setActiveStyle(color)
{
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute('title')) {
            links[i].removeAttribute('disabled');
        } else {
            links[i].setAttribute('disabled', true);
        }
    }
}

// body skin

const bodySkin = document.getElementById('body-skin');

bodySkin.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
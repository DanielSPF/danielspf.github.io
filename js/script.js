
// Preloader

window.addEventListener('load', function(){
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
});

// iTyped 

window.ityped.init(document.querySelector('.iTyped'), {
    strings: ['Eu sou Desenvolvedor Web.', 'Eu amo o que faço!', 'Gosto de desafios.', 'O que eu não sei, eu aprendo.'],
    loop: true
});

// Date and Age

const currentDate = new Date(),
    birthday = new Date('1998-01-09'),
    diff = Math.abs(currentDate.getTime() - birthday.getTime()),
    age = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
    spanAge = document.getElementById('age'),
    spanCopy = document.getElementById('copyYear');

    spanAge.innerText = age;
    spanCopy.innerText = currentDate.getFullYear();

// Portfolio Item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length;
    
    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add("active");

            const filterValue = this.getAttribute('data-filter');
            for (let k = 0; k < totalPortfolioItem; k++) {
                if (filterValue === portfolioItems[k].getAttribute('data-category')) {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                } else{
                    portfolioItems[k].classList.remove('show');
                    portfolioItems[k].classList.add('hide');
                }
                if (filterValue === 'all') {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
            }
        });
    }

// Portfolio Lighbox

const lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxClose = lightbox.querySelector('.lightbox-close'),
    lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function(){
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src').split('/');
    lightboxImg.src = imgSrc[0]+"/"+imgSrc[1]+"/"+imgSrc[3];
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

// close lightbox

lightbox.addEventListener('click', function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
});

// Aside Navbar

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
        // remove back section class
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                // add back section class
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
}

function addBackSectionClass(num) 
{
    allSection[num].classList.add('back-section');
}

function removeBackSectionClass() 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function updateNav(element) 
{
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index');
    addBackSectionClass(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
});

function showSection(element) 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];

    document.querySelector('#'+target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() 
{
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}

// Contact Form

const contactForm = document.getElementById('contact-form'),
    btnSubmit = document.querySelector('.btn_loading');
var yourName, email, subject, message;
contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    btnSubmit.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';

    yourName = document.getElementsByName('name')[0].value;
    email = document.getElementsByName('email')[0].value;
    subject = document.getElementsByName('subject')[0].value;
    message = document.getElementsByName('message')[0].value;
    if (yourName === '' || email === '' || subject === '' || message === '') {
        btnSubmit.innerHTML = 'Enviar mensagem';
        return showAlertBox('É necessário preencher todos os campos do formulário.', 'danger');
    }

    Email.send({
        // SecureToken : "6f468dd9-8048-407d-8d79-4cd07c9d9362",
        Host : "smtp.gmail.com",
        Username : "contato.danielwebsite@gmail.com",
        Password : "SuiD^8737RY8BFrhh*ArJecyoF8qakOr",
        To : 'danielfilho.web@gmail.com',
        From : email,
        Subject : subject,
        Body : "<p><strong>Nome: </strong>"+yourName+"</p>"+"<strong>Mensagem: </strong> <p>"+message+"</p>"
    }).then(
        function(){
            showAlertBox('Sua mensagem foi enviada com sucesso, entrarei em contato em breve!', 'success');
            cleanContactForm();
            btnSubmit.innerHTML = 'Enviar mensagem';
            
        },
        function(){
            showAlertBox('Houve um erro ao enviar o e-mail, por favor tente novamente!', 'danger');
            btnSubmit.innerHTML = 'Enviar mensagem';
        }
    );
});

function cleanContactForm(){
    yourName = document.getElementsByName('name')[0].value = "";
    email = document.getElementsByName('email')[0].value = "";
    subject = document.getElementsByName('subject')[0].value = "";
    message = document.getElementsByName('message')[0].value = "";
}

// AlertBox

const alertBox = document.querySelector('.alert-box'),
        closeBtn = document.querySelector('.close-alert');
let timer;

closeBtn.addEventListener('click', function(){
    hideAlertBox();
});

function showAlertBox(message, type)
{
    if (alertBox.classList.contains('hidden')) {
        alertBox.classList.remove('hidden');
    }
    alertBox.querySelector('p').innerText = message;
    alertBox.classList.add('alert-'+type);
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    timer = setTimeout(function(){
        hideAlertBox(type);
    }, 6000);
}

function hideAlertBox(type = false) 
{
    alertBox.classList.add('hide');
    alertBox.classList.remove('show');
    if (type != false) {
        timer = setTimeout(function(){
            alertBox.classList.remove('alert-'+type);
        }, 2000);
    }
}


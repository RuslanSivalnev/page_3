window.onload = () => {

    //corusle
    document.addEventListener('click', (e) => {
        if (e.target == document.querySelector('.next')) {
            step(1);
        } else if (e.target == document.querySelector('.prev')) {
            step()
        }
    })
    let left = 0;
    function step(x) {
        let row = document.querySelector('.about_shoes>p');
        let field = document.querySelector('.shoes');
        let name = document.querySelector('.about_shoes>h4');
        let arrName = ['TY', 'MAX', 'EMME', 'CAMILLE', 'NOEL', 'ROAN', 'NAT'];
        let step = Math.round(field.offsetWidth / 7);
        if (x) {
            if (left < -step * 5) {
                left = step;
            }
            left = left - step;
            field.style.left = left + 'px';
            row.innerHTML = `${(-left / step) + 1}/7`;
            doRow(-left / step);
        } else {
            left = left + step;
            if (left == step) {
                left = -step * 6;
            }
            field.style.left = left + 'px';
            row.innerHTML = `${(-left / step) + 1}/7`;
            doRow(-left / step);
        }
        function doRow(numberShoes) {
            for (let i = 0; i < arrName.length; i++) {
                if (i == numberShoes) {
                    name.innerHTML = arrName[i];
                }
            }
        }
    }


    // dot
    document.addEventListener("click", (e) => {
        switch (e.target.className) {
            case ('dot dot1'):
                scroll(e.target);
                clickScroll(0);
                break;
            case ('dot dot2'):
                scroll(e.target);
                clickScroll(1);
                break;
            case ('dot dot3'):
                scroll(e.target);
                clickScroll(2);
                break;
            case ('dot dot4'):
                scroll(e.target);
                clickScroll(3);
                break;
            case ('dot dot5'):
                scroll(e.target);
                clickScroll(4);
                break;
            case ('dot dot6'):
                scroll(e.target);
                clickScroll(5);
                break;
            case ('dot dot7'):
                scroll(e.target);
                clickScroll(6);
                break;
        }
    })
    let arrElements = document.querySelectorAll('.dot');

    window.addEventListener('scroll', (e) => {
        let sectionHeight = window.innerHeight;
        // цвет/позиция от положения страницы
        if (pageYOffset < sectionHeight / 2) {
            scroll(arrElements[0], 'white')
        }
        if (pageYOffset >= sectionHeight - sectionHeight / 1.99) {
            scroll(arrElements[1])
        }
        if (pageYOffset > sectionHeight * 2 - sectionHeight / 2) {
            scroll(arrElements[2], 'grey')
        }
        if (pageYOffset > sectionHeight * 3 - sectionHeight / 2) {
            scroll(arrElements[3])
        }
        if (pageYOffset > sectionHeight * 4 - sectionHeight / 2) {
            scroll(arrElements[4], 'grey')
        }
        if (pageYOffset > sectionHeight * 5 - sectionHeight / 2) {
            scroll(arrElements[5], 'grey')
        }
        if (pageYOffset > sectionHeight * 6 - sectionHeight / 2) {
            scroll(arrElements[6], 'grey')
        }

        if (window.innerWidth > 1921) {
            document.querySelector('header > nav').style.display = 'none';
        } else {
            document.querySelector('header > nav').style.display = 'flex';
        }
    })

    // Окраска и ширина точки
    function scroll(element, color) {
        spanStyle(color ? color : 'white')
        element.style.backgroundColor = 'red';
        element.style.width = 13 + 'px';
        element.style.height = 13 + 'px';

    }
    // Переход по высоте по нажатию
    function clickScroll(n) {
        let sectionHeight = window.innerHeight;
        window.scrollTo(0, sectionHeight * n);
        console.log(window.innerHeight);
    }

    //окраска всех остальных точек.
    function spanStyle(color) {
        for (let i = 0; i < arrElements.length; i++) {
            arrElements[i].style.backgroundColor = color;
            arrElements[i].style.width = 10 + 'px';
            arrElements[i].style.height = 10 + 'px';
        }

    }
    window.scrollTo(0, pageYOffset + 1);











}
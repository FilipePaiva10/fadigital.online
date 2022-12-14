window.onload = () => {

    animateTitle();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

// events

let section = document.querySelectorAll("section");
let navLinksDesktop = document.querySelectorAll(".list li a");

window.onscroll = () => {

    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.ofssetHeight;

        if (top >= offset && top < offset + height) {

            navLinksDesktop.forEach(links => {
                links.classList.remove('active');
            });

        }
    })

};


// functions

const animateTitle = () => {

    const element = window.document.getElementById("title");

    if (window.screen.width < 768) {
        element.innerText = "Sua empresa ao alcance de todos";

        return;
    } ;

    const title = "Sua empresa ao\nalcance de todos";
    const length = title.length;
    let i = 0;

    setInterval(() => {

        if (i < length) {

            try {
                element.innerHTML += title[i] === " " ? "&nbsp;" : title[i];
                i++;

            } catch (error) {
                return;
            }
        } else {
            return;
        }

    }, 150);

}



const showAside = (set) => {

    let sideBar = window.document.getElementById("side");

    if (set) {
        sideBar.style.display = "block";
        sideBar.style.width = "70vw";
    } else {
        sideBar.style.width = "0";
    }

}
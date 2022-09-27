window.onload = () => {
    animateTitle();
}

const animateTitle = () => {

    const element = window.document.getElementById("title");

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
        }else {
            return;
        }

    }, 150);

}


const showAside = (set) => {

    let sideBar = window.document.getElementById("side");

    if(set) {
        sideBar.style.display = "block";
        sideBar.style.width = "70vw";
    } else {
        sideBar.style.width = "0";
    }

}
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
            element.innerHTML += title[i] === " " ? "&nbsp;" : title[i];
            i++;
        }else {
            return;
        }

    }, 150);

}
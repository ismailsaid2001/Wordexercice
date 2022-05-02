var paragraph = document.querySelector('#paragraph')
var data = document.querySelector('#data');
data.addEventListener("change",
    (e) => {
        let info = e.target.value;
        let cssattribute = e.target.id
        paragraph.style[cssattribute] =
            cssattribute == "font-size" ? e.target.value + "px" : e.target.value;
    });
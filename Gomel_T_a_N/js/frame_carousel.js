function startPagePosition(position) {
    if(window.innerWidth>767){
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    else {
        document.querySelectorAll(".carousel_article_sm").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
}
function checkPosition(position) {
    if(window.innerWidth>767){
        switch(position) {
            case 0: document.querySelector("#but_arrow_left").style.display="none";
            document.querySelector("#but_arrow_right").style.display="block";
            break;
            case 3: document.querySelector("#but_arrow_right").style.display="none";
            document.querySelector("#but_arrow_left").style.display="block";
            break;
            default: document.querySelectorAll(".but_arrows_carousel").forEach(el=>el.style.display="block");
            break;
    }
    }
    else {
        switch(position) {
            case 0: document.querySelector("#but_arrow_up").style.display="none";
            document.querySelector("#but_arrow_down").style.display="block";
            break;
            case 3: document.querySelector("#but_arrow_down").style.display="none";
            document.querySelector("#but_arrow_up").style.display="block";
            break;
            default: document.querySelectorAll(".but_arrows_carousel").forEach(el=>el.style.display="block");
            break;
        }
    }
}
let position = localStorage.getItem('currentPosition');
position = (!position) ? 0 : +position;
startPagePosition(position);
if(window.innerWidth>767) {    
    document.querySelector("#but_arrow_right").onclick=()=>{
        position++;
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    document.querySelector("#but_arrow_left").onclick=()=>{
        position--;
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    document.querySelectorAll(".carousel_categories").forEach(el=>el.onclick=()=>{
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position=+el.getAttribute("data-category");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article").forEach(el=>el.style.translate=`${-100*position}% 0`);
        checkPosition(position);
    });
}
else {
    document.querySelector("#but_arrow_up").onclick=()=>{
        position--;
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article_sm").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    document.querySelector("#but_arrow_down").onclick=()=>{
        position++;
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article_sm").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".carousel_categories")[position].classList.add("active");
        checkPosition(position);
    }
    document.querySelectorAll(".carousel_categories").forEach(el=>el.onclick=()=>{
        document.querySelectorAll(".carousel_categories").forEach(el => el.classList.remove("active"));
        el.classList.add("active");
        position=+el.getAttribute("data-category");
        localStorage.setItem('currentPosition', position);
        document.querySelectorAll(".carousel_article_sm").forEach(el=>el.style.translate=`0 ${-100*position}%`);
        checkPosition(position);
    });
}


document.querySelectorAll(".clickable").forEach(Element => Element.onclick = () => {
    document.querySelector("#blackout").classList.toggle("active");
    document.querySelector("#cross_blackout").classList.toggle("active");
    document.querySelector("#H5_content").innerHTML = Element.getAttribute("data-place");
    document.querySelector(`#${Element.getAttribute("data-place").split(" ").join("")}`).classList.add("active"); 
    document.querySelector("#NEW_photography").setAttribute(`src`, `../media/img/NEW/${Element.getAttribute("data-place")}_new.jpg`);
    document.querySelector("#OLD_photography").setAttribute(`src`, `../media/img/OLD/${Element.getAttribute("data-place")}_old.jpg`);
    document.querySelector("#body").style.overflow = "hidden";
});
document.querySelector("#cross_blackout").onclick = () => {
    document.querySelector("#blackout").classList.toggle("active");
    document.querySelector("#cross_blackout").classList.toggle("active");
    document.querySelectorAll(".text_content").forEach(el => el.classList.remove("active"));
    document.querySelector("#body").style.overflow = "visible";
}

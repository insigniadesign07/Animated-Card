let btn = document.querySelector(".card-btn");
let slider = document.querySelector(".card-slider");


btn.addEventListener('click' , () => {
    slider.classList.toggle('show');

    let btnIcon = document.querySelector("i");
if(btnIcon.classList.contains('fa-plus')){
    btnIcon.classList.replace('fa-plus' , 'fa-minus');
}else{
    btnIcon.classList.replace('fa-minus' , 'fa-plus');

}
});
// * burger menu
const burgerBtn = document.querySelector(".burger_menu_btn");
const burgerIcon = document.querySelector(".burger_menu_icon");
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger_menu_icon_active");
    document.querySelector(".navbar_mobile_content_main").classList.toggle("open_menu")
});

// *tabs
const tabButton = document.querySelectorAll(".button_tab");
const tabContent = document.querySelectorAll(".tab_content");

tabButton.forEach((btn) => {
	btn.addEventListener("click", function(){
		let currentBtn = btn;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId)
		tabButton.forEach((btn) =>{
			btn.classList.remove("button_tab_active");
		});
		tabContent.forEach((tab) =>{
			tab.classList.remove("tab_content_active");
		});
		currentBtn.classList.add("button_tab_active");
        currentTab.classList.add("tab_content_active");
	});
});

// *slider

const sliderImages = document.querySelectorAll(".slider_image");
sliderImages[0].classList.add("slider_umg_active");
const sliderDots = document.querySelectorAll(".dot_button");
sliderDots[0].classList.add("dot_button_active");
let counter = 0;
for(let d = 0; d < sliderDots.length; d++){
	sliderDots[d].addEventListener("click",() => {
		for(let i = 0; i < sliderImages.length; i++){
			sliderDots[i].classList.remove("dot_button_active");
			sliderImages[i].classList.remove("slider_umg_active");
		};
		counter = d;
		sliderImages[counter].classList.add("slider_umg_active");
		sliderDots[counter].classList.add("dot_button_active");
	});
};
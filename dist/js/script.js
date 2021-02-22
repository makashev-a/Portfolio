const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeBtn = document.querySelector('.menu__close'),
	  menuOverlay = document.querySelector('.menu__overlay'),
	  sidepanelLink = document.querySelectorAll('.sidepanel__link'),
	  sidepanelDivider = document.querySelector('.sidepanel__divider'),
	  sidepanelText = document.querySelector('.sidepanel__text');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape') {
		menu.classList.remove('active');
	}
});

window.addEventListener('scroll', () => {
	if (window.scrollY > window.innerHeight/2) {
		for (let i = 0; i<sidepanelLink.length; i++) {
			sidepanelLink[i].classList.add('sidepanel__link_black');
		}	
	} else if (window.scrollY < window.innerHeight/2) {
		for (let i = 0; i<sidepanelLink.length; i++) {
			sidepanelLink[i].classList.remove('sidepanel__link_black');
		}
	}
	if (window.scrollY > window.innerHeight/2) {
		sidepanelDivider.classList.add('sidepanel__divider_black');
		sidepanelText.classList.add('sidepanel__text_black');
	} else if (window.scrollY < window.innerHeight/2) {
		sidepanelDivider.classList.remove('sidepanel__divider_black');
		sidepanelText.classList.remove('sidepanel__text_black');
	}
});
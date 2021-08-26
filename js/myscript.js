"use strict";

const navWrap = document.getElementById("nav-wrap");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("back-to-top");
// add or remove multiple classes using spread syntax
const cls1 = ["bg-light", "scrolled"];
const cls2 = ["top"];
let isOk = document.getElementById("is-ok").value;

// Espace client
const radioClients = document.querySelectorAll('input[name="rdostatut"]');
const radioServices = document.querySelectorAll('input[name="rdoservices"]');
const hiddenInfo = document.querySelectorAll('input[name="service"]');

// Actualites...
const screenWidth = window.screen.width;

window.onload = function () {
	// console.log(isOk);
	if (isOk == "true") {
		navWrap.classList.remove(...cls2);
		navWrap.classList.add(...cls1);
	} else {
		navWrap.classList.remove(...cls1);
		navWrap.classList.add(...cls2);
	}

	if (radioServices) {
		const infoClients = document.getElementById("client");

		radioServices.forEach((element) => {
			element.addEventListener("click", () => {
				infoClients.classList.remove("unactive");
				infoClients.classList.add("active");

				hiddenInfo.forEach((hiddenElement) => {
					hiddenElement.setAttribute("value", element.value);
				});
			});
		});
	}

	if (radioClients) {
		let formInactive = "";

		radioClients.forEach((element) => {
			element.addEventListener("click", () => {
				let attr = element.value;
				let frmIDActive = "frm-" + attr;
				let formAcitve = document.getElementById(frmIDActive);

				formInactive =
					attr == "entreprise" ? (formInactive = document.getElementById("frm-particulier"))
						: (formInactive =
								document.getElementById("frm-entreprise"));

				formAcitve.classList.remove("unactive");
				formAcitve.classList.add("active");
				formInactive.classList.remove("active");
				formInactive.classList.add("unactive");
			});
		});
	}

	// Actualites...
	let arrSlides = document.querySelectorAll('img[class*="slide"]');
	const slideImg = ['sm', 'md', 'lg'];
	let src_ = "/assets/img/com/";
	let arrImg = ["/abj.jpeg", "/brochettes.jpeg", "/kids.jpeg", "/lumiere.jpeg", "/lumiere_.jpeg", "/saucisses.jpeg", "/woman.jpeg"];
	let fldr = "sm";
	
	if (screenWidth <= 576) {
		for (let i = 0; i < arrSlides.length; i++) {
			if (i == 1) {
				continue;
			}
			const element = arrSlides[i];
			fldr = "sm";
			element.src = `${src_}${fldr}${arrImg[i]}`;
			console.table(element);
			console.table(element.src);
		}
	} else if (screenWidth > 576 && screenWidth <= 768) {
		for (let i = 0; i < arrSlides.length; i++) {
			if (i == 1) {
				continue;
			}
			const element = arrSlides[i];
			fldr = "md";
			element.src = `${src_}${fldr}${arrImg[i]}`;
			console.table(element);
			console.table(element.src);
		}
		
	} else if (screenWidth > 768) {
		// console.log("TEst...");
		for (let i = 0; i < arrSlides.length; i++) {
			const element = arrSlides[i];
			fldr = "lg";
			element.src = `${src_}${fldr}${arrImg[i]}`;
			// console.table(element);
			// console.table(element.src);
		}
	}
};

window.onscroll = function () {
	getScrollPosition();
};

const getScrollPosition = () => {
	let y = window.scrollY;

	if (y > 150) {
		navWrap.classList.remove(...cls2);
		navWrap.classList.add(...cls1);
		backToTop.classList.remove("hide");
		backToTop.classList.add(
			"animate__animated",
			"animate__shakeY",
			"animate__infnite"
		);
	} else {
		if (y == 0) {
			if (isOk == "false") {
				// console.log({y, isOk});
				navWrap.classList.remove(...cls1);
				navWrap.classList.add(...cls2);
			}
			backToTop.classList.add("hide");
			backToTop.classList.remove(
				"animate__animated",
				"animate__shakeY",
				"animate__infnite"
			);
		}
	}
};

if (backToTop) {
	backToTop.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
		});
	});
}

const btnContact = document.getElementById("btncontact");

/*if (btnContact) {
	btnContact.addEventListener("click", () => {
		let inputArr = document.getElementsByTagName("input");
		let message = document.getElementById("formMsg");

		// Checking the emptyness of the required fields
		let isFilled = true;
		for (let i = 0; i < 4; i++) {
			const element = inputArr[i];
			isFilled = Boolean(element.textLength);
			if (!isFilled) {
				break;
			}
		}

		// Getting the infos on the various scenarios
		if (!isFilled) {
			console.log("Please, fill up all the required fields.");
		} else if (message.textLength <= 0) {
			console.log("Please, fill up the message field.");
		} else {
			// Write the code to send the mail to infos@novatic-group.com
			console.log(
				"Write the code to send the mail to infos@novatic-group.com"
			);

			// Clearing the fields
			for (let i = 0; i < 4; i++) {
				const element = inputArr[i];
				element.value = "";
			}
			message.value = "";
		}
	});
}*/

// Animation
// Wraps every letter in a span...
/*var heroTitle = document.querySelector('.nova-anime-1');
		heroTitle.innerHTML = heroTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		// Animation itself...
		anime.timeline({
				loop: false
			})
			.add({
				targets: '.nova-anime-1 .letter',
				opacity: [0, 1],
				easing: "easeInOutQuad",
				duration: 1250,
				delay: (el, i) => 150 * (i + 1)
			});*/

/*var heroSTitle = document.querySelector('.nova-anime-2');
		heroSTitle.innerHTML = heroSTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		anime.timeline({
				loop: false
			})
			.add({
				targets: '.nova-anime-2 .letter',
				translateY: ["1.1em", 0],
				translateZ: 0,
				duration: 750,
				delay: (el, i) => 50 * i
			})*/

/* Hero Title Animation */

const words = ["DANS UN MONDE", "D'INNOVATION", "PERPETUELLE"];
// let cursor = gsap.to(".cursor", {
// 	opacity: 0,
// 	ease: "power3.inOut",
// 	repeat: -1,
// });

// gsap & scrolltrigger have to be declared in "jshint.options" in the settings.json file in vscode
let masterTl = gsap
	.timeline({
		repeat: -1,
	})
	.pause();
let boxTL = gsap.timeline();
let textTL = gsap.timeline().pause();

let bienvenue = document.querySelector(".text");

boxTL
	.to(".box", {
		duration: 1,
		width: () => bienvenue.clientWidth + 10 + "px",
		delay: 0.5,
		ease: "power4.inOut",
		// onComplete: () => console.log("Text color has to change")
	})
	.from(".bienvenue", {
		duration: 1,
		opacity: 0,
		y: "12vh",
		ease: "power3.out",
	})
	.to(".box", {
		duration: 1,
		height: () => bienvenue.clientHeight + 5 + "px",
		ease: "elastic.out",
		onComplete: () => textTL.play(),
	})
	.to(".bienvenue", {
		duration: 1,
		css: {
			color: "#172444",
		},
		ease: "Black.easeOut",
	})
	.to(".box", {
		duration: 2,
		autoAlpha: 0.9,
		yoyo: true,
		repeat: -1,
		ease: "easeIn",
	});

textTL.to(".stext", {
	duration: 1.5,
	opacity: 1,
	repeat: 2,
	yoyo: true,
});

/* End Hero Title Animation */

const revealOrange = gsap.utils.toArray(".reveal-orange");
revealOrange.forEach((text, i) => {
	ScrollTrigger.create({
		trigger: text,
		toggleClass: "active",
		start: "top 90%",
		end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const revealBlue = gsap.utils.toArray(".reveal-bleu");
revealBlue.forEach((text, i) => {
	ScrollTrigger.create({
		trigger: text,
		toggleClass: "active",
		start: "top 90%",
		end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgFromLeft = gsap.utils.toArray(".img-from-left");
imgFromLeft.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: "active",
		start: "top 90%",
		// end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pFromRight = gsap.utils.toArray(".p-from-right");
pFromRight.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 90%",
		// end: "bottom 5%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgFromRight = gsap.utils.toArray(".img-from-right");
imgFromRight.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: "active",
		start: "top 90%",
		// end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pFromLeft = gsap.utils.toArray(".p-from-left");
pFromLeft.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 90%",
		// end: "bottom 5%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgFromTop = gsap.utils.toArray(".img-from-top");
imgFromTop.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: "active",
		start: "top 90%",
		// end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pFromTop = gsap.utils.toArray(".p-from-top");
pFromTop.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 90%",
		// end: "bottom 5%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgFromBottom = gsap.utils.toArray(".img-from-bottom");
imgFromBottom.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: "active",
		start: "top 90%",
		// end: "top -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pFromBottom = gsap.utils.toArray(".p-from-bottom");
pFromBottom.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 90%",
		// end: "bottom 5%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pZoom = gsap.utils.toArray(".p-zoom");
pZoom.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 70%",
		end: "bottom -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgZoom = gsap.utils.toArray(".img-zoom");
imgZoom.forEach((div, i) => {
	ScrollTrigger.create({
		trigger: div,
		toggleClass: "active",
		start: "top 100%",
		end: "bottom -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const pAppear = gsap.utils.toArray(".p-appear");
pAppear.forEach((p, i) => {
	ScrollTrigger.create({
		trigger: p,
		toggleClass: "active",
		start: "top 70%",
		end: "bottom -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

const imgAppear = gsap.utils.toArray(".img-appear");
imgAppear.forEach((div, i) => {
	ScrollTrigger.create({
		trigger: div,
		toggleClass: "active",
		start: "top 100%",
		end: "bottom -30%",
		toggleAction: "restart none none none",
		// markers: true
	});
});

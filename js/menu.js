(function ($) {
	"use strict";

	$(function () {
		var header = $(".start-style");
		// console.log(header);
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass("start-style").addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass("start-style");
			}
		});
	});

	//Animation
	$(document).ready(function () {
		$("body.hero-anime").removeClass("hero-anime");
	});

	//Menu On Hover
	$("body").on("mouseenter mouseleave", ".nav-item", function (e) {
		if ($(window).width() > 991) {
			var _d = $(e.target).closest(".nav-item");
			_d.addClass("show");
			setTimeout(function () {
				_d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
			}, 1);
		}
	});

	//Switch light/dark
	$("#switch").on("click", function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		} else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});
})(jQuery);

const navLinks = document.querySelectorAll(".nova-link");

Object.keys(navLinks).forEach((key) => {
	// console.log(
	// 	key,
	// 	typeof navLinks[key],
	// 	navLinks[key],
	// 	navLinks[key].classList
	// );

	const _menuButton = document.getElementById("menu-button");
	const _navbarContent = document.getElementById("navbar-content");

	navLinks[key].addEventListener("click", (e) => {
		// e.preventDefault();

		_menuButton.classList.toggle("collapsed");
		_navbarContent.classList.toggle("show");
		let isExpanded = _menuButton.getAttribute("aria-expanded");

		// console.log(`${isExpanded}`);
		_menuButton.setAttribute("aria-expanded", !isExpanded);
	});
});

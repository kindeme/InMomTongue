"use strict";
const $ = (selector) => document.querySelector(selector);

const navToggle = $(".nav-toggle");
const links = $(".links");
const date = $("#date");
const icon = $("#icon");

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-links");
	if (icon.classList.contains("fa-bars")) {
		icon.classList.remove("fa-bars");
		icon.classList.add("fa-times");
	} else {
		icon.classList.add("fa-bars");
		icon.classList.remove("fa-times");
	}
});

const now = new Date();
date.textContent = now.getFullYear();

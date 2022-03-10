"use strict";
const $ = (selector) => document.querySelector(selector);

const navToggle = $(".nav-toggle");
const links = $(".links");

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

const date = $("#date");

const now = new Date();
date.textContent = now.getFullYear();

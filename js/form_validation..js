"use Strict";
$(document).ready(() => {
	$("#form_contact").submit((event) => {
		let isValid = true;

		//validate firstName
		const firstName = $("#firstName").val().trim();

		if (firstName == "") {
			$("#firstName").next().text("Required");
			isValid = false;
		} else {
			$("#firstNAme").next().text("");
		}

		//validate the name entry
		const lastName = $("#lastName").val().trim();
		if (lastName == "") {
			$("#lastName").next().text("Required");
			isValid = false;
		} else {
			$("#lastName").next().text("");
		}

		//validate email
		const emailPattern =
			/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;

		const email = $("#email").val().trim();

		if (email == "") {
			$("#email").next().text("Required");
			isValid = false;
		} else if (emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}

		//validate the phone number
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("Required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}

		// prevent the submission
		if (!isValid) {
			event.preventDefault();
		}
	});
});

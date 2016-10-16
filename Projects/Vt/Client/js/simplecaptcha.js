function newCaptcha( objectToChange , captcha_id) {
/* die Verwendung eines zufälligen Wertes verhindert das
Cachen des Bildes durch den Browser. Ansonsten analog
zum <img> Tag. */
	var random = Math.random();
	objectToChange.src = pathprefix + '/virtual.jpg?captcha_cmd_generateCaptcha=true&client_request_random=' + random + '&captcha_generateCaptchaId=' + captcha_id;
}
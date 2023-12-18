const XMLHttpRequest_Root = new XMLHttpRequest();


const Container_Footer = document.createElement("footer");
const Container_OutBounds = document.createElement("div");

const Container_Login = document.createElement("div");
const Container_Map = document.createElement("div");


var Container_Overlay = null;

var Button_Login = null;
var Button_LoginClose = null;

var Buttons_Maps = null;
var Button_MapClose = null;

var Delay_Functions = 0;


function Request_Send(URL_HTML, Request_HTML) {
	XMLHttpRequest_Root.open("GET", URL_HTML, true);
	XMLHttpRequest_Root.onload = Request_HTML;

	XMLHttpRequest_Root.send();
}

function HTML_Append(Container_Addable, Container_Point, Class_Addable) {
	if (XMLHttpRequest_Root.status === 200) {
		Container_Addable.innerHTML = XMLHttpRequest_Root.responseText;
		Container_Addable.className = Class_Addable;

		Container_Point.insertAdjacentElement("afterend", Container_Addable);
	}
}


function Login_Switch() {
	Container_Overlay.classList.toggle("visible");
	Container_Login.classList.toggle("visible");
}

function Map_Switch() {
	window.scrollTo(0, 0);

	Container_Overlay.classList.toggle("visible");
	Container_Map.classList.toggle("visible");
}


setTimeout(function () {
	document.body.innerHTML = `<div class="overlay"></div>${document.body.innerHTML}`;
	Container_Overlay = document.querySelector(".overlay");
}, Delay_Functions);

setTimeout(function () {
	Request_Send("../../ResourcesData/HTML/Blocks/footer.html",
		function () { HTML_Append(Container_Footer, document.body, "footer"); });
}, Delay_Functions += 80);

setTimeout(function () {
	Request_Send("../../ResourcesData/HTML/Blocks/OutBounds.html",
		function () { HTML_Append(Container_OutBounds, Container_Footer, "outbounds"); });
}, Delay_Functions += 80);

setTimeout(function () {
	Request_Send("../../ResourcesData/HTML/Popups/login.html",
		function () { HTML_Append(Container_Login, Container_Overlay, "login"); });
}, Delay_Functions += 80);

setTimeout(function () {
	Request_Send("../../ResourcesData/HTML/Popups/map.html",
		function () { HTML_Append(Container_Map, Container_Login, "map"); });
}, Delay_Functions += 80);


setTimeout(function () {
	Button_Login = document.querySelector(".header-button-login");
	Button_LoginClose = document.querySelector(".login-button-close");

	Buttons_Maps = document.querySelectorAll(".button-map");
	Button_MapClose = document.querySelector(".map-button-close");

	Button_Login.addEventListener("click", Login_Switch);
	Button_LoginClose.addEventListener("click", Login_Switch);

	Buttons_Maps.forEach(function (Button_Map) { Button_Map.addEventListener("click", Map_Switch); });
	Button_MapClose.addEventListener("click", Map_Switch);
}, Delay_Functions += 80);
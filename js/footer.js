const footer = document.querySelector(".footer-holder");

const name1 = "HTML";
const name2 = "CSS";
const name3 = "JAVA-SCRIPT";
const and = "and";

let lang = [name1, name2, name3];
let result = [];

for (let i = 0; i < lang.length; i++) {
	var x = lang[i];

	if (i === lang.length - 1) result.push(and);
	result.push(x);
}
footer.innerText = `this page was built using: ${result[0]}, ${result[1]}, ${result[2]} ${result[3]}`;

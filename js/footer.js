const footer = document.querySelector('.footer-holder');

const name1 = 'HTML';
const name2 = 'CSS';
const name3 = 'JAVA-SCRIPT';
const and = 'and';

let lang = [name1,name2,name3];
let result = [];

for (let i = 0; i < lang.length; i++) {
    var x = lang[i];
    result.push(x);
    footer.innerText = `this page was built using: ${result}` 
}

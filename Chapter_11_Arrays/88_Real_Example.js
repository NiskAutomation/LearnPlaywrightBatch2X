let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

browser.shift();
console.log(browser);

for(let i = 0; i <= browser.length; i++){
    console.log(browser[i]);
    if(browser[i] === 'opera'){
        console.log("Opera is remove from the selenium")
    }
}
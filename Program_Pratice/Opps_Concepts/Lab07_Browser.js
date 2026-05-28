class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + "Launched")

    }
    startBrowser(){
        console.log("Start the broswer")
    }
    closeBrowser(){
        console.log("Close the browser")
    }
   }

let chrome = new Browser("Chrome ");
let firefox = new Browser("Firefox ")
console.log(chrome.isOpen);
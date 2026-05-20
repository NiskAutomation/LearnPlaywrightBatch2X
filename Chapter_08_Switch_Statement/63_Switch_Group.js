let browser = "Edge";
switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("You are using a Chromium-based browser.");
        break;
    case "Firefox":
        console.log("You are using Firefox.");
        break;
    case "Safari":
        console.log("You are using Safari.");
        break;
    default:
        console.log("Unknown browser.");
}
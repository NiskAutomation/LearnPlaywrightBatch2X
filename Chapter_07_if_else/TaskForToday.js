
// 🔢 Take a number and print whether it is even or odd
let number = 7;
if (number % 2 === 0) {
    console.log ("✅ number is even.");
} else {
    console.log("❌ number is odd.");
}

// 📊 Take marks (0 to 100) and print the grade based on these rules:
// 🅰️ 90 and above: A
// 🅱️ 80 -> 89: B
// ©️ 70 -> 79: C
// 🔹 60 -> 69: D
// ❌ below 60 -> failed
let marks = 85;
if (marks >= 90) {
    console.log("🅰️ Grade: A");
} else if (marks >= 80) {
    console.log("🅱️ Grade: B");
} else if (marks >= 70) {
    console.log("©️ Grade: C");
} else if (marks >= 60) {
    console.log("🔹 Grade: D");
} else {
    console.log("❌ Grade: Failed");
}       

// 📅 Leap year check
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("✅ is a leap year."); 
} else {
    console.log("❌ is not a leap year.");
}       


// 🌐 Given HTTP status code, print which category it belongs to:
// ✅ 200 - 299 => Success
// 🔀 300 - 399 => Redirection
// ⚠️ 400 - 499 => Client Error
// 🚨 500 - 599 => Server Error
// ❌ Anything else => Invalid status code
let statusCode = 404;
if (statusCode >= 200 && statusCode < 300) {
    console.log("✅ Success");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("🔀 Redirection");
} else if (statusCode >= 400 && statusCode < 500) {
    console.log("⚠️ Client Error");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log("🚨 Server Error");
} else {
    console.log("❌ Invalid status code");
}


// 🧪 Compare actual result with expected result and print test verdict
// 📝 expected = "Login successful"
// ✅ actual = "Login successful"
// 🎯 Output: Test passed
let expected = "Login successful";
let actual = "Login successful";
if (expected === actual) {
    console.log("✅ Test passed");
} else {
    console.log("❌ Test failed");
}

// 🐛 Given bugs impact score (1 to 10), classify the severity of the bug as follows:
// 🔴 9 - 10 => Critical (blocker release)
// 🟠 7 - 8 => High (major release)
// 🟡 4 - 6 => Medium (minor release)
// 🟢 1 - 3 => Low (patch release)
// ❌ anything else => Invalid score
let bugImpactScore = 5;
if (bugImpactScore >= 9 && bugImpactScore <= 10) {
    console.log("🔴 Critical (blocker release)");
} else if (bugImpactScore >= 7 && bugImpactScore <= 8) {
    console.log("🟠 High (major release)");
} else if (bugImpactScore >= 4 && bugImpactScore <= 6) {
    console.log("🟡 Medium (minor release)");
} else if (bugImpactScore >= 1 && bugImpactScore <= 3) {
    console.log("🟢 Low (patch release)");
} else {
    console.log("❌ Invalid score");
}



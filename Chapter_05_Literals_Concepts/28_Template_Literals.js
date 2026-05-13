 let firstname = "Niishikant";

 // Template literals (backticks) with embedded expressions
 let fullname = `My name is ${firstname} Pradhan and I am learning JavaScript.`;
 console.log(fullname); // My name is Niishikant and I am learning JavaScript.

 const env = "production";
 const userId = 12345;
 const apiUrl = `https://api.example.com/${env}/users/${userId}`;
 console.log(apiUrl); // https://api.example.com/production/users/12345

 //playwright
 const rowIndex = 1;
 const columnIndex = 'email';
 await page.locator(`[data-testid="table"] tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})]`);
 

 //logs
 const testName = "Login Test";
 const status = "passed";
console.log(`Test "${testName}" has ${status}.`); // Test "Login Test" has passed.

//screenshot
const testCase = "Login Test";
const timestamp = Date.now();
const screenshotPath = `screenshots/${testCase}_${timestamp}.png`;
await page.screenshot({ path: screenshotPath });



username = "Nishikant";
password = "Nishikant123";

const payload = {
  "username": `${username}`,
  "password": `${password}`,
  "timestamp": `${new Date().toISOString()}` // ISO string format for timestamp
};
console.log(payload);
/*
{
  username: "Nishikant",
  password: "Nishikant123",
  timestamp: "2024-06-01T12:34:56.789Z" // example timestamp
}
*/
let testScore = 85;
switch (true) {
    case testScore >= 95:
        console.log("Oustanding");
        break;
    case testScore >= 85:
        console.log("Excellent");
        break;
    case testScore >= 75:
        console.log("Good");
        break;
    case testScore >= 65:
        console.log("Average");
        break;  
    default:
        console.log("Needs Improvement");
}
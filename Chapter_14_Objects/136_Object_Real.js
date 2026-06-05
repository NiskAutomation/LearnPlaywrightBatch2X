const { act } = require("react")

const ENV ={
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    TIMEOUT: 5000,
    RETRIES : 2,
    BROWSER : 'chrome'
}


const Expected_response = {
    status = 200,
    body:{
        user:{role: "admin", active: true}
    }
}
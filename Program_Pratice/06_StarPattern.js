function rightAngle(num){
    for(let i = 0; i<=num; i++){
        console.log('* '.repeat(i));
    }
}
rightAngle(5);

console.log('------------------');
function leftAngle(num){
    for(let i = num ; i >=0; i--){
        console.log('* '.repeat(i));
    }
}
leftAngle(5);

console.log('------------------');

function pyramid(num){
    for(let i = 0; i<=num; i++){
        console.log(' '.repeat(num - i) + '* '.repeat(i));
    }
}
pyramid(5);

console.log('------------------');
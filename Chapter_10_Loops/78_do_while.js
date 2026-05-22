let retry = 1;
do{
    console.log("execute a code");
    console.log("Retrying....", retry);
    retry++;
}while(retry < 3)
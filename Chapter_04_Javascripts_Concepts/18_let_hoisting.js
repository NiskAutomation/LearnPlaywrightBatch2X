console.log(score);
let score = 100; // ReferenceError: Cannot access 'score' before initialization

{
    //TDZ (Temporal Dead Zone) Concept starts here
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    //let score = 100; // ReferenceError: Cannot access 'score' before initialization
    //typescore;
    //---TDZ (Temporal Dead Zone) Concept ends here
     let score = 100; //declare reach , TDZ ended here
    console.log(score); // 100 safe to access score after declaration
    
}



//for hosting such error will be shown
//for var it will be undefined
//for let and const it will be ReferenceError: Cannot access 'score' before initialization
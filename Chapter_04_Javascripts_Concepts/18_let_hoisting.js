console.log(score);
let score = 100; // ReferenceError: Cannot access 'score' before initialization

{
    //TDZ (Temporal Dead Zone) Concept starts here
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    //let score = 100; // ReferenceError: Cannot access 'score' before initialization
    //typescore;
    //---TDZ (Temporal Dead Zone) Concept ends here
    console.log(score);
    let score = 100; // ReferenceError: Cannot access 'score' before initialization
}
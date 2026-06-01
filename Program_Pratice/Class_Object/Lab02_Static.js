class TestRunner{
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed){
        this.name = name;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
        }
 
    }
    static summary(){
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}

new TestRunner("Login", true);
new TestRunner("signup", false);
new TestRunner("cart", true);
new TestRunner("checkout", true);


console.log(TestRunner.summary());

//you can call static method with ClassName.method() , Not Object Method();
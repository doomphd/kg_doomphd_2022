var testArray = [10,300,5,6,5123]; //example array
var stringArray = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]; //Array for each number count

//loop to assign each value in testArray 
for(var i = 0; i < testArray.length; i++){
    num = testArray[i]; // assign num to be the value of each value in testArray
    var str = ""; // initialize var str

    while(num > 0){
        var mod = (num % 10); //gets place to parse
        str = stringArray[mod]+str; //gets the word form of parsed value and update it for however many digit it has
        num = Math.floor((num/10)); //gets the digit that code is working on
    }

    testArray[i] = str+','; 

}
console.log(...testArray);

/*
TODO: GET RID OF LAST COMMA
      ALLOW FOR USER INPUT TO REPLACE TESTARRAY
*/

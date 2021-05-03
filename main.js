//Array for each number count
var stringArray = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]; 
//loop to assign each value in testArray 
for(var i = 2; i < process.argv.length; i++)
{
    var num = process.argv[i]; // assign num to be the value of each value in testArray
    var str = ""; // initialize var str
    while(num > 0) 
    {
        var mod = num%10; //gets place to parse
        str = stringArray[mod]+str; //gets the word form of parsed value and update it for however many digit it has
        num = Math.floor((num/10)); //gets the digit that code is working on
    }
    if(i+1 == process.argv.length) {process.argv[i] = str;} //gets rid of comma at the last argument
    else {process.argv[i] = str+',';}
    process.stdout.write(process.argv[i]);
}
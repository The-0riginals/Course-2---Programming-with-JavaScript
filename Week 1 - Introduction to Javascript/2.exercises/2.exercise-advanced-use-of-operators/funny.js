function a () {
    return
    {
       Name :"klause"
     };
};

console.log(a()) ; //undefined

//how to fix this code to return the object?
//the return statement should be in the same line with the curly braces
//or the curly braces should be in the same line with the return statement
//example:
//return {Name :"klause"};
//or
//return {
//    Name :"klause"
//};


function b(){
    return{ 
        Name :"klause"
    };
};

console.log(b()) ; //{ Name: 'klause' }

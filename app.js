// for(var i = 0; i < 10; i++){
//     document.write(i)
// }

// var a = 0;
// while(a < 10){
//     document.write(a);
//     a++
// }
// var b = 0;
// do{
//     document.write(b)
//     b++;
// }
// while(b < 10)


// function foo(){
//     var a = 2+2;
//     document.write("HELLO KARACHI" + "<br><br> " + a)
// }

// function add(a,b,c){
//     var z = (a+b+c)
//     alert(z)
// }

// function add(greet){
//       alert(greet)
// }

// function clickBtn() {
//     alert("WELCOME TO PEOPLE OF SAYLANI ")
// }

// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)

//     name.value = ""
// }

// function getName (){
//     var name = document.getElementById("name");
//     name.value = "ABDULLAH"
//     var para = document.getElementById("para");
    
//             //   value use input attributr and innnerHTML use in paragraph and others
//     para.innerHTML = "Hello this is example"

// }
// getName()








function getNumber(num){
    var result = document.getElementById("result");

    result.value += num;

}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""

}

function getResult(){
    var result = document.getElementById("result");

    result.value = eval(result.value )
}
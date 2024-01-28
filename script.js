//const a = 4;
let b = null;


let time = 6;
let first_name = "Hassan "
let last_name = "Adeleke"

// time == 12 ? alert('Good Noon' + first_name + last_name) : alert('Good Morning,' + first_name + last_name);
// if(time == 12){
//     alert('Good Noon')
// } else if(time != 12){
// alert('Good Morning')
// }
const friends = ['John', 'Yusuf', 'Bob']

function add (a, b){
    let x = 4
    const c = a + b
    return c
}
// alert(x)
function toCelsius(f) {
    let x = 4
  return (5/9) * (f-32);
}

// alert(toCelsius(50))

let person = {
    firstName: 'Hasan',
    lastName: 'Adeleke',
    colour:'blue',
    movie:'Infinity war',
    hasLaptop: false,
    fullName: function (){
        return ('Full Name is ' + this.firstName + this.lastName)
    }
} // object

// alert('my favorite movie is  ' + person.movie)
 // if(person.hasLaptop){
//     alert(person.name +' Has a laptop')
// } else if(person.hasLaptop != true){
//     alert(person.name +' does not have a laptop')
// }

function square (x) {
    return x**2;
}
// alert(person.fullName())

const even = [2, 4, 6, 8, 10] //array

const fullName = "Hassan Adeleke"
console.log(fullName.split(" "))

/* 
String Methods
- length
- slice()
- substring()
- substr()
- replace()
- replaceAll()
- toUpperCase()
- toLowerCase()
- concat()
- trim()
- trimStart()
- trimEnd()
- padStart()
- padEnd()
- charAt()
- charCodeAt()
- split()
*/

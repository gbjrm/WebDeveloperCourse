.padStart()
//input
'Turtle' .padStart(10);

//output
"    Turtle"


.padEnd()
//input
'Turtle' .padEnd(10);

//output
"Turtle    "

const fun = (
			a,
			b,
			c,
			d,
			) =>{
	console.log(a);
}
fun(1,2,3,4,)
//output
1

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Marcia',
	username1: 'John',
	username2: 'Abby'
}

Object.keys(obj).forEach((key, index) =>{
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value =>{
	console.log(value);
})

Object.entries(obj).forEach(value =>{
	console.log(value);
})

Object.entries(obj).map(value=>{
	return value[1] + value[0].replace('username', '');
})



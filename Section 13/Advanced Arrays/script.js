const array = [1, 2, 10, 16];

// map, filter, reduce

const mapArray = array.map(num =>num*2);


console.log('map', mapArray);

// filter

const filterArray = array.filter(num => num> 5);

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumalator, num)=>{
	return accumalator + num;
}, 0);
console.log('reduce', reduceArray);
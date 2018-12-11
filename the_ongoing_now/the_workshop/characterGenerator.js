const random = require('random');

let characteristics=["teamwork", "futurevision","analytics","tinkering","collection","projectmanagement","ambition"];
let Teamwork=random.float(min=1, max=10);
let FutureVision=random.float(min=1, max=10);
let Analytics=random.float(min=1, max=10);
let Tinkering=random.float(min=1, max=10);
let Collection=random.float(min=1, max=10);
let ProjectManagement=random.float(min=1, max=10);
let Ambition=random.float(min=1, max=10);


console.log("All characterists on 1-10 scale: 1 is low and 10 is high");
for(var i =0; i<characteristics.length;i++){
	let value = random.float(min=1, max=10);
	console.log(characteristics[i], value);
}


const random = require('random');
const printer = require('printer');
const util = require('util');
const fs = require('fs');

let characterName = process.argv[2];
let yourJob = process.argv[3];

let characteristics=["teamwork", "futurevision","analytics","tinkering","collection","projectmanagement","ambition"];
// let Teamwork=random.float(min=1, max=10);
// let FutureVision=random.float(min=1, max=10);
// let Analytics=random.float(min=1, max=10);
// let Tinkering=random.float(min=1, max=10);
// let Collection=random.float(min=1, max=10);
// let ProjectManagement=random.float(min=1, max=10);
// let Ambition=random.float(min=1, max=10);
character_stats="";
for(var i =0; i<characteristics.length;i++){
	let value = random.float(min=1, max=10);
	character_stats = character_stats + characteristics[i] +": " + value +"\n";
	// console.log(characteristics[i], value);
}
console.log("Your Name: " + characterName)
console.log("Position: " + yourJob);
console.log("")

console.log("All characterists on 1-10 scale: 1 is low and 10 is high");

console.log(character_stats);
// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));




charSheet = "Your Name: " + characterName + "\n" + "Position: " + yourJob +"\n\n" + "All characterists on 1-10 scale: 1 is low and 10 is high" + "\n\n" + +"Your characteristics: " + "\n"+character_stats;


f_name = 'CharacterSheet'+characterName+'.txt';
//writes a file with the character sheet and then prints it out as a callback function
fs.writeFile(f_name, charSheet, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
	console.log('Sheet saved!');
	printer.printFile({filename:f_name,
		printer: "_172_22_151_102", // printer name, if missing then will print to default printer
		success:function(jobID){
		  console.log("sent to printer with ID: "+jobID);
		},
		error:function(err){
		  console.log(err);
		}
	  });
});


//I'm  not using this function in this
const printStuff = toPrint => {
	printer.printDirect(
		{data:toPrint,
		printer:'_172_22_151_102',
		success:function(jobID){
			console.log("sent to printer with ID " + jobID)
		},
		error:function(err){console.log(err);}
		}
	)
}
// printStuff(character_stats)
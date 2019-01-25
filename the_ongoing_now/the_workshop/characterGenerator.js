const random = require('random');
const printer = require('printer');
const util = require('util');
const fs = require('fs');
var interpretations = JSON.parse(fs.readFileSync('interpretations.json', 'utf8'));
let characterName = process.argv[2];
let yourJob = process.argv[3];

let characteristics=["teamwork", "future vision","analytics","tinkering","collection","project management","ambition"];

character_stats="";
for(var i =0; i<characteristics.length;i++){
	let value = random.float(min=1, max=10);
	character_stats = character_stats + characteristics[i] +": " + value +"\n";
	// console.log(characteristics[i], value);
}

likes="";
dislikes="";
for(var i=0;i<3;i++){
	let likesTop = random.int(min=1, max=70);
	let likeR = random.int(min=0, max=3);
	likes = likes + interpretations.tarot_interpretations[likesTop].meanings.shadow[likeR] +"\n";
	dislikes = dislikes + interpretations.tarot_interpretations[likesTop].meanings.light[likeR] +"\n";
}

let jobDescription = "";
if(yourJob == "WasteDrone"){
	jobDescription= 
	`
Job Description:
You must follow directions of your superiors.
You speak in a halting monotone.
Your job is to collect discarded objects and present them to Analysts.
Too much work may cause you to break.
If you are broken you can be fixed by an Associate
If you do well you can recieve treats.
Independent thought is encouraged but don't break the rules.
If you are not being utilized you should create posters featuring our slogans.
Cheer along your team and make sure that everyone is doing their best.
Report any growth inhibiting behavior to the Associate.
	`	
}
if(yourJob == "ImpactAnalyst"){
	jobDescription= 
	`
Job Description:
Your methods are different from the Process Analyst but your goal is the same.
You should take every opportunity to collaborate with Process Analysts.
You take objects from the Waste Droids.
Then you inspect them and evaluate them for their Material Affordances.
You must Analyze and List what the objects are composed of.
You present your Analysis to the Associates.
Make any notes on other interesting features you find.
Cheer along your team and make sure that everyone is doing their best.
Report any growth inhibiting behavior to the Principal.
	`	
}
if(yourJob == "ProcessAnalyst"){
	jobDescription= 
	`
Job Description:
Your methods are different from the Impact Analyst but your goal is the same.
However you view Impact Analysts as your bitter rivals.
You take objects from the Waste Droids.
Then you inspect them and evaluate them for their Future Affordances.
Specifically, you must infer the usefuleness of these objects after the Bow Sink.
Your present your Analysis to the Associates.
Make any notes on other interesting features you find.
Cheer along your team and make sure that everyone is doing their best.
Report any growth inhibiting behavior to the Principal.
	`	
}
if(yourJob == "Associate"){
	jobDescription= 
	`
Job Description:
You are the lifeblood of your team, the glue that holds them together.
You must manage manage manage!
Make sure that the Analysts get along.
Fix any broken Waste Droids.
Compile analysis from the Analysts into Reports.
Double check the reports for errors.
Deliver the reports to the Principal.
Cheer along your team and make sure that everyone is doing their best.
If you are at a loss for something to do at the moment create
	motivational posters featuring our slogans.
Report any growth inhibiting behavior to the Principal.
	`
}

// console.log("Your Name: " + characterName)
// console.log("Position: " + yourJob);
// console.log("")
// console.log("All characterists on 1-10 scale: 1 is low and 10 is high");
// console.log(character_stats);
// console.log("Your likes: "+ "\n" + likes);
// console.log("Your dislikes: "+ "\n" + dislikes);

// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));




charSheet = "Your Name: " + characterName + "\n" + "Position: " + yourJob +"\n\n" + "All characterists on 1-10 scale: 1 is low and 10 is high" + "\n\n" +"Your characteristics: " + "\n"+character_stats + "\n\n" + "Your likes: "+ "\n" + likes + "\n\n" + "Your dislikes: "+ "\n" + dislikes + "\n\n\n\n\n" + jobDescription;
console.log(charSheet);
f_name = 'CharacterSheet'+characterName+'.txt';
//writes a file with the character sheet and then prints it out as a callback function
fs.writeFile(f_name, charSheet, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
	console.log('Sheet saved!');
	printer.printFile({filename:f_name,
		printer: "Canon_MG3600_series", // printer name, if missing then will print to default printer
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
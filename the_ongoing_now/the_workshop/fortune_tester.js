var fs = require('fs');
var interpretations = JSON.parse(fs.readFileSync('interpretations.json', 'utf8'));


console.log(interpretations.tarot_interpretations[70].meanings.light[0])
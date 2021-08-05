var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';

tourDestinations.push('London');
tourDestinations.pop();

if(tourDestinations[1] == 'nepal'){
    console.log('pahare ahare');
}
else if(tourDestinations.length == 4){
    console.log('aro taka ase aro beshi ghurmu')
}
else{
    console.log('kothao jamu nh')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget){
    console.log('ami dim khamu')
}
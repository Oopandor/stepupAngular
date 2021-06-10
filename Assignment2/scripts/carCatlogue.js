const cars = [
      {
        name: 'Mustang',
        company: 'Ford',
        price: 1000,
        modelNo: 'S1'
      }, {
        name: 'Jaguar',
        company: 'Tata',
        price: 10000,
        modelNo: 'S2'
      }, {
        name: 'Rolls Royce',
        company: 'Rolls Royce',
        price: 20000,
        modelNo: 'S13'
      }, {
        name: 'i10',
        company: 'Hyundai',
        price: 3000,
        modelNo: 'S24'
      }, {
        name: 'Amaze',
        company: 'Tata',
        price: 2000,
        modelNo: 'S4'
      }, {
        name: 'Skoda',
        company: 'Laura',
        price: 1400,
        modelNo: 'S5'
      }, {
        name: 'Duster',
        company: 'Nissan',
        price: 3000,
        modelNo: 'S28'
      }
    ];

    const people = [
      {
        name: 'Jack',
        minBudget: 5000
      }, {
        name: 'Joe',
        minBudget: 3000
      }, {
        name: 'Jill',
        minBudget: 50000
      }, {
        name: 'Jim',
        minBudget: 10000
      }
    ];
	
	function loadData(){

for( x in people)
{
var vehicle = '';
var capability = '';
var i = 1;
for(y in cars){

if(people[x].minBudget>=cars[y].price){
  vehicle =  vehicle+"\n"+cars[y].company+"\n";
  capability = capability+"<br>"+i+") "+cars[y].company+"<br>";
  i++;
}
}
console.log();
console.log(" Mr. "+people[x].name+" can buy \n"+vehicle);

document.write(" <br> <h4><u> Mr. "+people[x].name+" can buy </u></h4><br>"+capability);
}
}


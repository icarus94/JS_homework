var listOfPeople =  [	{ime:'Pera', prezime:'Peric', godRodj:'1970',mesto:'Beograd'},
						{ime:'Marija', prezime:'Petrovic', godRodj:'1988',mesto:'Beograd'},
						{ime:'Kosta', prezime:'Sovic', godRodj:'1975',mesto:'Kragujevac'},
						{ime:'Mitar', prezime:'Miric', godRodj:'1994',mesto:'Novi Sad'}];

function createTable(listOfPeople1,searchByName,searchBySurname,searchByYear){
	var tableHTML="<table border='solid'>";
	tableHTML+="<th>Ime</th><th>Prezime</th><th>Godina rodjenja</th><th>Mesto</th>";
	var atLeastOne=false
	for (var i = 0; i < listOfPeople1.length; i++) {
		if(searchByName!=null && !(listOfPeople1[i].ime.match(new RegExp(searchByName,"i"))!=null)){
			continue;
		}
		if(searchBySurname!=null && !(listOfPeople1[i].prezime.match(new RegExp(searchBySurname,"i"))!=null)){
			continue;
		}
		if(searchByYear!=null && !(listOfPeople1[i].godRodj.match(new RegExp(searchByYear,"i"))!=null)){ //na vecoj skali zauzima brda memorije
			continue;
		}
		tableHTML+="<tr>";
		tableHTML+="<td>"+listOfPeople1[i].ime+"</td>";
		tableHTML+="<td>"+listOfPeople1[i].prezime+"</td>";
		tableHTML+="<td>"+listOfPeople1[i].godRodj+"</td>";
		tableHTML+="<td>"+listOfPeople1[i].mesto+"</td>";
		tableHTML+="</tr>";
		atLeastOne=true
	}
	if(atLeastOne==false){
		return "<h3>Not Found</h3>";
	}
	return tableHTML+"</table>";
}
function showAll(){
	document.getElementById("table").innerHTML = createTable(listOfPeople,null,null,null);
}
function showByYear(){
	document.getElementById("table").innerHTML = createTable(listOfPeople,null,null,document.getElementById("year").value);
}
function showByName(){
	document.getElementById("table").innerHTML = createTable(listOfPeople,document.getElementById("name").value,null,null);
}
function showBySurname(){
	document.getElementById("table").innerHTML = createTable(listOfPeople,null,document.getElementById("surname").value,null);
}
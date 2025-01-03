function changeTheme()
{
	var naglowki= document.getElementsByTagName("p");
	var tytul=document.getElementById("tytul");
	if(document.body.style.backgroundColor=="white")
	{
		document.body.style.backgroundColor="#343434";
		for(var naglowek of naglowki)
		{
			naglowek.style.color="DarkOrchid";
		}
		tytul.style.color="#ECEFF1";
	}
	else
	{
		document.body.style.backgroundColor="white";
		for(var naglowek of naglowki)
		{
			naglowek.style.color="black";
		}
		tytul.style.color="black";
	}
}
var help=0;
function bonusInfo()
{
	if(help==0)
	{
		var podziekowania=document.createElement("p");
		podziekowania.style.marginLeft="60px";
		var imie=document.getElementById("imie1").value;
		var wstaw=document.createTextNode("Dziękujemy "+imie+" za wzięcie udziału w ankiecie.");
		podziekowania.appendChild(wstaw);
		var pomoc=document.getElementById('miejsce');
		pomoc.appendChild(podziekowania);
		
		
		let info=document.createElement("h4");
		let guziki=document.getElementsByName("otwarcie");
		let trzym=0;
		for(var guzik of guziki)
		{
			if(guzik.checked)
			{
				trzym=guzik.value;
			}
		}
		if(trzym==0)
			trzym="Bóg";
		 wstaw=document.createTextNode("Niech " + trzym + " będzie z tobą. :) Poprzednio wybrano: "+ localStorage.getItem("wybor"));
		 info.appendChild(wstaw);
		 pomoc=document.getElementById('miejsce');
		pomoc.appendChild(info);
		help=1;
	}
}
function ost()
{
	let guziki=document.getElementsByName("otwarcie");
		for(var guzik of guziki)
		{
			if(guzik.checked)
			{
				localStorage.setItem("wybor",guzik.value);
			}
		}

}

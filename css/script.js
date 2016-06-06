$(document).ready(function(){
	$("#info2").css("display", "none"),
	displayWork();
	window.onload = googlemap;
});

function googlemap(){
	var div=document.getElementById("mymap");
		var mostrar={
			center: new google.maps.LatLng (19.439845,-70.67268),
			zoom: 12, 
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(div, mostrar);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(19.439845,-70.67268),
			map: map,
		});
}

function displayWork(){
	replace_all("name", "row-5", title, rol, 1),
	replace("welcome", "row-4", welcomeMessage, 0),
	replace("skils", "row-4", skills, 0),
	replace("skills2", "row-4", skill, 0),
	replace("pic", "row-4", pics, 0),
	join("jobs", "row2 .content", 0),
	join("projects", "row3 .content", 0),
	join("schools", "row4 .content", 0),
	join("onlinecourses", "row4 .content", 0),
	join("mapas", "maps .content", 0);

	
	for(e in contacts){
		val=contact.replace("%data%", contacts[e]);
		display("row-6 center", val, 0);
		display("center", val, 0);
	}
}


var join = function(name, place, n){
	var h=0;
	var val=eval(name);
	for(j in val){
		s=eval(name+"."+j);
		replace(name+"_"+j+"", place, s[0], n);
	}
	for(c in val){
		s=eval(name+"."+c);
		f=String(s[1]);
		if(f!="undefined"){
			replace(name+"_"+c+"", place, s[1], 0);
		}
	}
			
}

function replace(name, place, text, d){
	var n=eval(""+name+"").replace("%data%", text);
	display(place, n, d);
}
function replace_all(name0, place, text1, text2, d){
	var n=eval(""+name0+"").replace("%data%", text1);
	n=n.replace("%data%", text2);
	display(place, n, d);
}
function display(n, s, num){
	if(num==0){
		$("."+n+"").append(""+s+"");
	}else{
		$("."+n+"").prepend(""+s+"");
	}
}


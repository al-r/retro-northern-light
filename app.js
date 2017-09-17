var line = $('.gradient.gradient-northern-light'),
	container = $('#gradient-container'),
	sky = $('#sky-nuance'),
	star = $('.star');

function skyNuance(){
	var skyHeight = $(window).height() - container.height();
	sky.css({'height': skyHeight + 'px'});
};

function displayStars(){
	var windowW = $(window).width(),
		windowH = $(window).height(),
		nbStars = star.length,
		spaceW = windowW / nbStars,
		spaceH = windowH / nbStars;

	star.each(function(index){
		var posLeft = Math.round(Math.random() * (spaceW * (index+1))),
			posTop = Math.round(Math.random() * (spaceH * (index+1)));
		$(this).css({'left': posLeft, 'top': posTop});

		if(Math.random()<0.34){
			$(this).addClass('star-l');
		} else if(Math.random()<0.67){
			$(this).addClass('star-m');
		} else {
			$(this).addClass('star-s');
		}
	});
};

function displayNortherLights(){
	var windowW = window.innerWidth,
		lineW = 10,
		nbLine = Math.floor(windowW / lineW);

	var maxHeight = container.height(),
		minHeight = 50,
		midHeight = (maxHeight-minHeight)/2;

	var gap = Math.round((maxHeight - minHeight) / 30);
	var lineHeight;

	for(i=0;i<(nbLine-1);i++){
		//Create a new line
		var newLine = document.createElement("div");
		var where = document.getElementById("gradient-container");
		where.appendChild(newLine);

		//Calculate its height
		if(i===0){
			if(Math.round(Math.random())){
				lineHeight =  midHeight+gap*(i+1);
			} else {
				lineHeight =  midHeight-gap*(i+1);
			}
		} else {
			if(Math.round(Math.random()) || lineHeight < minHeight){
				lineHeight = lineHeight+gap;
			} else if(lineHeight > maxHeight) {
				lineHeight = maxHeight-gap;
			} else {
				lineHeight = lineHeight-gap;
			}
		}

		//Add a class to line according to calculated height
		if(lineHeight>midHeight){
			newLine.className += "gradient gradient-northern-light";
		} else{
			newLine.className += "gradient gradient-northern-light-green";
		}

		//Position and set line's height
		newLine.style.left = (i*lineW) + 'px';
		newLine.style.height = lineHeight + 'px';

		//Animate
		if(Math.random()<0.34){
			newLine.className += " anim-delay-l";
		} else if(Math.random()<0.67){
			newLine.className += " anim-delay-m";
		} else {
			newLine.className += " anim-delay-s";
		}
	}
};

$(window).on('load resize', function(){
	skyNuance();
	displayStars();
	displayNortherLights();
	$('#text').remove();
});
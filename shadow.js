var playBtn, //shadow host
	playIcon; //shadow root

playBtn = document.getElementById('play-button');
playIcon = playBtn.webkitCreateShadowRoot();
playIcon.textContent = 'lol';


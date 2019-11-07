function log(msg,id='') {
	let el = document.createElement('p');
	el.id = id;
	el.innerText = msg;
	document.body.appendChild(el);
}
window.onload = function() {
	let origin, topOrigin, referrer, frameType='Unknown', bgColor='gray';
	origin = window.location.origin;
	log(`window.location.origin: ${origin}`, 'windowOrigin');
	referrer = document.referrer;
	log(`document.referrer: ${referrer}`, 'documentReferrer');
	try {
		topOrigin = top.location.origin;
		if(origin.indexOf('http') > -1) {
			frameType = (origin === topOrigin) ? 'Same Origin':'Cross Origin';
		} else {
			frameType = 'Same Origin';
		}
	} catch(e) {
		frameType = 'Cross Origin'
		topOrigin = 'SecurityError';
	}
	document.getElementById('frameType').innerText = 'Treated as ' + frameType;
	switch(frameType) {
		case 'Same Origin':
			bgColor ='green';
			break;
		case 'Cross Origin':
			bgColor ='red';
			break;
		case 'Dynamic (srcdoc)':
			bgColor = 'blue';
			break;
	}
	document.body.style.backgroundColor = bgColor;
	log(`top.location.origin: ${topOrigin}`, 'topOrigin');
}
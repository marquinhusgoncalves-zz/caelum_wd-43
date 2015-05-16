document.querySelector('#form-busca').onsubmit = function () {
	if(document.querySelector('#q').value == '') {
		document.querySelector('#q').style.background = 'red';
		return false;
		document.querySelector('#q').onfocus;
	}
};



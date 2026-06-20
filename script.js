function volume_sphere() {
	
	let res = document.getElementById('volume')
	let r = Number(document.getElementById('radius').value)
	
    if(isNaN(r) || r < 0) {
		res.value = "NaN"
		return false;
	}
	
	let volume = ( 4 / 3 ) * Math.PI * r * r * r ;
	
	res.value = volume.toFixed(4);
	return false;
} 

window.onload = function() {
	document.getElementById('MyForm').onsubmit = volume_sphere;
};

  


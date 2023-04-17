const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '683f9cb17dmshc48e89e32681fb4p13b6a5jsn1d132e29af20',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
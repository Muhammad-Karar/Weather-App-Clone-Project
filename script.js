const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd3a1fe323msh97963128ee5c419p17f570jsnfaac5455fb5a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}


submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})



// cloud_pct2.innerHTML = response.cloud_pct

//===================================================================================================================
//Table Section
const getWeather2 = (city2) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct2.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees2.innerHTML = response.wind_degrees
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

getWeather2("kohat")


const getWeather3 = (city3) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct3.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}
getWeather3("Peshawar")


const getWeather4 = (city4) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct4.innerHTML = response.cloud_pct
		temp5.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}
getWeather4("islamabad")




const getWeather5 = (city5) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct5.innerHTML = response.cloud_pct
		temp6.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}
getWeather5("abbottabad")



const getWeather6 = (city6) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city6 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct6.innerHTML = response.cloud_pct
		temp7.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity7.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed7.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}
getWeather6("karachi")


const getWeather7 = (city7) =>{
	
	// cityName.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city7 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct7.innerHTML = response.cloud_pct
		temp8.innerHTML = response.temp
		feels_like7.innerHTML = response.feels_like
		humidity8.innerHTML = response.humidity
		min_temp7.innerHTML = response.min_temp
		max_temp7.innerHTML = response.max_temp
		wind_speed8.innerHTML = response.wind_speed
		wind_degrees7.innerHTML = response.wind_degrees
		sunrise7.innerHTML = response.sunrise
		sunset7.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}
getWeather7("Multan")

//===================================================================================================================
// Dropdown Section
//1
const getWeather8 = (city8) =>{
	
	cityName.innerHTML = city8
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city8 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press1.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("kohat")
})

//2

const getWeather9 = (city9) =>{
	
	cityName.innerHTML = city9
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city9 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press2.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("peshawar")
})


//3

const getWeather10 = (city10) =>{
	
	cityName.innerHTML = city10
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city10 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press3.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("islamabad")
})

//4

const getWeather11 = (city11) =>{
	
	cityName.innerHTML = city11
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city11 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press4.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("abbottabad")
})

//5

const getWeather12 = (city12) =>{
	
	cityName.innerHTML = city12
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city12 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press5.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("karachi")
})

//6

const getWeather13 = (city13) =>{
	
	cityName.innerHTML = city13
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city13 , options)
	.then(response => response.json())
	.then((response) => {
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
		console.log(response)
		
	})
	
	
	.catch(err => console.error(err));
}

press6.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather8("multan")
})
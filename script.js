const url = ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6eaeede804msh4be72a9dcb8ab97p174897jsn01a712a16978',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) =>{
try {
	const response = await fetch(url, options);
	const result = await response.text();

	{
	console.log(result);
	cityName.innerHTML = city
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
	}
	}
} catch (error) {
	console.error(error);
}


submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})



getweather("Delhi")
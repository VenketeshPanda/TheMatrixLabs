const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('search-button');
const name=document.getElementById('city-name');
const details=document.getElementById('details');


async function checkWeather(city){
    const api_key="75784b417bd0462aa6f40eef8e282480";
    const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';

    const weather_data=await fetch('${url}').then(response=>response.json());

    console.log(weather_data);
}
searchBtn.addEventListene('click',()=>{
    checkWeather(inputBox.value);
});
const apiKey = `1534f60ab30eb21f43d2b9e2f8c4f597`;
const loadTemperature = cityy => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data, cityy);
        });
}
const displayData = (data, c) => {
    console.log(data);
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const city = document.getElementById('city');
    city.innerText = c;
    const weather = document.getElementById('weather-d');
    weather.innerText = data.weather[0].main;
    document.getElementById('input-field').value = ''
}
document.getElementById('btn-search').addEventListener('click', function () {
    const search = document.getElementById('input-field');
    const input = search.value;
    loadTemperature(input);

})
//-- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://openweathermap.org
//APIkey: dc304b9ce0bd16645551ba2d5fa054b1
let urlBase='https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey='dc304b9ce0bd16645551ba2d5fa054b1';
let kelvinDegree = 273.15;
//Asignamos al boton el evento 
document.getElementById('btnSearch').addEventListener('click',() =>{
    //obtenemos el valor del input
    let city= document.getElementById('input-city').value;
    let selectOption = document.getElementById('advOptions');
    let selectedValue = selectOption.value;
    console.log(`Valor seleccionado: ${selectedValue}`);
    if(city){
        fetchData(city)
    }  
})
//Obtener valor busqueda avanzada

//funcion para obtener datos validados
function fetchData(city){
    fetch(`${urlBase}${city}&appid=${apiKey}`)
    .then(response=>response.json())
    .then(data => showData(data))
}
function showData(data){
    let character=', ';
    console.log(data)
    const divData= document.getElementById('data');
    divData.innerHTML='';
    const divData2= document.getElementById('data2');
    divData2.innerHTML='';
    //Variables para mostar
    const cityName = data.name;
    const countryName = data.sys.country;
    const ubi=document.createTextNode(cityName+character+countryName);
    const temp_max = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon=data.weather[0].icon;
    
    
    //Creamos los elementos HTML
    const cityTitle = document.createElement('h2');
    cityTitle.textContent=ubi;

    const tempPara = document.createElement('p');
    tempPara.textContent=`La temperatura es : ${Math.floor(temp_max-kelvinDegree)} ºC`;

    const humidPara = document.createElement('p');
    humidPara.textContent=`La humedad es : ${humidity}`;

    const iconInfo = document.createElement('img')
    iconInfo.src= `https://openweathermap.org/img/wn/${icon}@2x.png`


    const descPara = document.createElement('p');
    descPara.textContent=`El clima actual es : ${description}`;
    //Se ingresa datos al Div de muestra
    divData.appendChild(ubi);
    divData2.appendChild(tempPara);
    divData2.appendChild(humidPara);
    divData2.appendChild(iconInfo);
    divData2.appendChild(descPara);
}




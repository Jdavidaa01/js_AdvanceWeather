# Instrucciones de Uso

- Clona este repositorio y abre el archivo HTML en tu navegador.
- Ingresa el nombre de la ciudad en el campo de entrada y selecciona una opción avanzada del menú desplegable.
- Presiona el botón Buscar para obtener los datos del clima en la ciudad especificada.

# Código Principal
```
Variables Globales javascript

let urlBase = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = 'dc304b9ce0bd16645551ba2d5fa054b1';
let kelvinDegree = 273.15;
```
# Evento del Botón

Al presionar el botón de búsqueda, se captura el valor de la ciudad ingresada y la opción avanzada seleccionada. Si el campo de la ciudad no está vacío, se llama a la función fetchData().
```
javascript

document.getElementById('btnSearch').addEventListener('click', () => {
    let city = document.getElementById('input-city').value;
    let selectOption = document.getElementById('advOptions');
    let selectedValue = selectOption.value;
    console.log(`Valor seleccionado: ${selectedValue}`);

    if (city) {
        fetchData(city, selectedValue);
    }
});
```
# Función fetchData()

Esta función realiza una solicitud a la API de OpenWeatherMap y pasa los datos obtenidos a la función showData() para mostrarlos en la interfaz de usuario.
```
javascript

function fetchData(city, selectedValue) {
    fetch(`${urlBase}${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => showData(data, selectedValue));
}
```
# Función showData()

La función showData() crea elementos HTML para mostrar la información obtenida. Dependiendo de la opción avanzada seleccionada (selectedValue), muestra datos específicos como la temperatura, la humedad, o un ícono representativo del clima actual.
# Recursos

Documentación de la API de OpenWeatherMap (https://openweathermap.org/api/one-call-3)

import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import styles from './App.module.css';


const apiKey = '6bc3d8eeeddf1c173e7643ed410d5ac0'


function App() {
  const [data, setData] = React.useState([])

  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("No puedes agregar más ciudades");
    } else{
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setData(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
  }
}

function handlOnClose(id) {
  setData(prevData => {
    return prevData.filter(city => city.id !== id)
  })
}
return (
  <div className={styles.app}>
    <div className={styles.bkg} />
    <div className={styles.container}>
      <div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
      <div className={styles.citiesContainer}>
        {data.length > 0 && <Card
          primary
          max={data[data.length - 1].max}
          min={data[data.length - 1].min}
          name={data[data.length - 1].name}
          img={data[data.length - 1].img}
        //onClose={() => alert(Cairns.name)}
        />}
        <Cards
          cities={data}
          onClose={handlOnClose}
        />
      </div>
    </div>
  </div>
);
}

export default App;
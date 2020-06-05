const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locationInfo = document.querySelector('.location')
const forecastInfo = document.querySelector('.forecast')


weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const location = search.value;
  
  locationInfo.textContent = 'Loading...'
  forecastInfo.textContent = ''

  fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        locationInfo.textContent = data.error;
      } else {
        locationInfo.textContent = data.location;
        forecastInfo.textContent = data.forecast;
      }
    })
  })

})
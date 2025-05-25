const loadCountryApi = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountryApi()

const displayCountries = (countries) => {
    // console.log(countries);
    const uiDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
      <img src="${country.flags.png}" alt="">
      <h3>Name:${country?.name?.common}</h3>
      <p>Population:${country.population}</p>
      <button onclick="loadCountryByName('${country.name.common}')">See Details</button>`
        uiDiv.appendChild(div)
    })
}
const loadCountryByName = (name) => {
    // fetch(`https://restcountries.com/v3.1/name/${name}`)othoba evabeo kora jay

    const url = ` https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleCountry(data[0]))
}

const displaySingleCountry = (country) => {
    // console.log(country);
    window.scrollTo(0, 0);
    const countryDetails = document.getElementById('country-details')
    countryDetails.classList.add('details-country');
    countryDetails.innerHTML = `
<img src="${country.flags.png}" alt="">
 <h3>Name:${country?.name.common}</h3>
      <p>Capital:${country.capital}</p>
      <p>Status:${country.status}</p>
      <p>Region:${country.region}</p>
      <p>Language:${country?.language?.ben}</p>
      <p>Population:${country.population}</p>
    
<iframe src="${country?.maps?.googleMaps}" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}


document.getElementById('search-button').addEventListener('click', function () {
    const inputText = document.getElementById('Search-input').value;
    console.log(inputText);
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => console.log(data))
})







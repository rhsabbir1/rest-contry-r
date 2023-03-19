const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (contries)=>{
    console.log(contries[0])
    const coutryHtml = contries.map(coutry =>creatCountryHtml(coutry)).join(' ');
    const CountryContainer = document.getElementById('Country-container')
    CountryContainer.innerHTML = coutryHtml;
}
const creatCountryHtml = (data)=>{
   console.log(data.name.common)
    return `
    <div>
        <h1>${data.name.common}</h1>
    </div>
    `
}
loadCountries()


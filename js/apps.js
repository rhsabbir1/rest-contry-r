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
   console.log(data)
    return `
    <div class="country-data">   
        <img src="${data.flags.png}" alt="">
        <h1>Name : ${data.name.common}</h1>
        <h3>Area :${data.area}</h3>
        <div class="coatOfArms">
             <img src="${data.coatOfArms.png}" alt="">    
        </div>
        <h2>Coat Of Arms</h2>
    </div>
    `
}
loadCountries()


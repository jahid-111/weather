console.log("...data Loaded");


const Api_Key =  'e0ae58d6ded01b31e345fe101a75da6a';        

const temLoadApi = city => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`;
        fetch(url)
        .then( res => res.json())
        .then (data => getemp(data))
    };




    const getemp = (data) =>  {
        // console.log(data)

        const temperature =document.getElementById('temperature');
        temperature.innerText = data.main.temp;

        const cityName = document.getElementById('cityName');
        cityName.innerText = data.name;

        const humadity = document.getElementById('humadity');
        humadity.innerText = data.main.humidity;

        const feelsLike =  document.getElementById('feelsLike');
            feelsLike.innerText = data.main.feels_like;

    }


    const resultBtn  =  document.getElementById('resultBtn');
        resultBtn.addEventListener('click', function () {
            const inputField =  document.getElementById('inputField')
            inputFieldOnvalue =  inputField.value;
            temLoadApi(inputFieldOnvalue);
        })



            temLoadApi('Saudi Arabia')      //Default UI          
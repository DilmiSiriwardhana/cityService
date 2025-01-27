const axios = require("axios");

module.exports.cityService = async (event) => {
  const city = event.queryStringParameters?.city;

  if (!city) {
    return {
      body: JSON.stringify({ message: "Enter the city" }),
    };
  }

  const cityFormat = /^[a-zA-Z\s-]+$/;
  if (!cityFormat.test(city)) {
    return {
      body: JSON.stringify({ message: "Entered format is invalid" }),
    };
  }

  const APIkey = "867782e371a229531b0bad2789d49d75";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

  try {
    const data = await axios.get(url);
    return {
        body: JSON.stringify(data.data),
    };
  } catch (error) {
      console.error("Error fetching weather data:", error);
  }
};

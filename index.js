const axios = require('axios');

const API_KEY = "zJ8eIhYOXdyaDnigKbXBXL9AE9z8jpNaKgC2xIcw";
const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY ;

async function GetNasaDataAxios(city) {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
}

/** 
async function GetNasaDataFetch(city) {
    try{
    const url = new URL(BASE_URL);

    console.log(`Requête envoyée à l'API NASA APOD : ${url.toString()}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    // Convertir la réponse en JSON
    const data = await response.json();

    // Vérifier si l'API a renvoyé une erreur
    if (data.error) {
      throw new Error(data.error.message || "Erreur de l'API");
    }

    // Retourner les données de l'API
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error.message);
    throw error;
  }
}
  */
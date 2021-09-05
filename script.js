// Write your JavaScript code here!

// import { myFetch } from "./scriptHelper";
// const {
//     myFetch
// } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (listedPlanets) {
        let planet = pickPlanet(listedPlanets);
        console.log('Adding destination info');
        console.log(planet);
        addDestinationInfo(
            document,
            planet.name,
            planet.diameter,
            planet.star,
            planet.distance,
            planet.moons,
            planet.image
        )
    })

    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    let form = document.querySelector("form");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoMassInput);
    });
});
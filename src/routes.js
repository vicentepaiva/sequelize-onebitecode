const express = require("express");
const routes = express.Router();

const PlanetController = require("../controler/PlanetController");
const SateliteController = require("../controler/SateliteController");
const CapController = require("../controler/CapController");
const SpaceshipController = require("../controler/SpaceshipController");


routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
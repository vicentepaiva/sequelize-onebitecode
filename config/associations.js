const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

//associação de um unica
Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreignKey: "planetId", as: "planet"});

// associação com vários
// Planet.hasMany(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
// Satelite.belongsTo(Planet, {foreignKey: "planetId", as: "planet"});

Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships",
  });
  
  Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps",
  });
module.exports = {Planet, Satelite};
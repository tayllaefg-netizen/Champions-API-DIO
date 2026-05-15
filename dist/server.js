"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var import_cors = __toESM(require("cors"));
var import_express2 = __toESM(require("express"));

// src/routes.ts
var import_express = require("express");

// src/repositories/players-repository.ts
var database = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78
    }
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84
    }
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 85,
      Passing: 92,
      Dribbling: 87,
      Defending: 62,
      Physical: 79
    }
  },
  {
    id: 5,
    name: "Kylian Mbapp\xE9",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 86,
      Passing: 79,
      Dribbling: 91,
      Defending: 39,
      Physical: 76
    }
  },
  {
    id: 6,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78
    }
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84
    }
  },
  {
    id: 9,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 88,
      Shooting: 90,
      Passing: 75,
      Dribbling: 81,
      Defending: 32,
      Physical: 89
    }
  },
  {
    id: 10,
    name: "Neymar Jr.",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 92,
      Shooting: 84,
      Passing: 88,
      Dribbling: 95,
      Defending: 38,
      Physical: 72
    }
  },
  {
    id: 11,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 87,
      Passing: 81,
      Dribbling: 89,
      Defending: 45,
      Physical: 75
    }
  },
  {
    id: 12,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 60,
      Passing: 78,
      Dribbling: 70,
      Defending: 90,
      Physical: 92
    }
  },
  {
    id: 13,
    name: "Sadio Man\xE9",
    club: "Liverpool",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 95,
      Shooting: 85,
      Passing: 78,
      Dribbling: 90,
      Defending: 45,
      Physical: 78
    }
  },
  {
    id: 14,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 84,
      Shooting: 70,
      Passing: 86,
      Dribbling: 82,
      Defending: 85,
      Physical: 77
    }
  },
  {
    id: 15,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 84,
      Shooting: 85,
      Passing: 86,
      Dribbling: 48,
      Defending: 90,
      Physical: 77
    }
  },
  {
    id: 16,
    name: "Frenkie de Jong",
    club: "Barcelona",
    nationality: "Netherlands",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 78,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 80,
      Physical: 82
    }
  },
  {
    id: 17,
    name: "Raheem Sterling",
    club: "Manchester City",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 93,
      Shooting: 82,
      Passing: 79,
      Dribbling: 90,
      Defending: 40,
      Physical: 77
    }
  },
  {
    id: 18,
    name: "Zlatan Ibrahimovi\u0107",
    club: "AC Milan",
    nationality: "Sweden",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 81,
      Shooting: 92,
      Passing: 85,
      Dribbling: 86,
      Defending: 40,
      Physical: 88
    }
  },
  {
    id: 19,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72
    }
  }
];
var findAllPlayers = () => __async(null, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
var insertPlayer = (player) => __async(null, null, function* () {
  database.push(player);
  return player;
});
var deleteOnePlayer = (id) => __async(null, null, function* () {
  const index = database.findIndex((p) => p.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
});
var findAndModifyPlayer = (id, statistics) => __async(null, null, function* () {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = __spreadValues(__spreadValues({}, database[playerIndex].statistics), statistics);
    return database[playerIndex];
  }
  return void 0;
});

// src/utils/http-helper.ts
var ok = (data) => __async(null, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var created = (data) => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: data != null ? data : { message: "successful" }
  };
});
var noContent = () => __async(null, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = (message = "Bad request") => __async(null, null, function* () {
  return {
    statusCode: 400,
    body: { message }
  };
});
var notFound = (message = "Resource not found") => __async(null, null, function* () {
  return {
    statusCode: 404,
    body: { message }
  };
});
var conflict = (message = "Resource already exists") => __async(null, null, function* () {
  return {
    statusCode: 409,
    body: { message }
  };
});
var internalServerError = (message = "Internal server error") => __async(null, null, function* () {
  return {
    statusCode: 500,
    body: { message }
  };
});

// src/services/players-service.ts
var requiredPlayerFields = [
  "name",
  "club",
  "nationality",
  "position",
  "statistics"
];
var statisticFields = [
  "Overall",
  "Pace",
  "Shooting",
  "Passing",
  "Dribbling",
  "Defending",
  "Physical"
];
var isInvalidId = (id) => !Number.isInteger(id) || id <= 0;
var isValidScore = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 100;
var isValidStatistics = (statistics, requireAllFields = false) => {
  if (!statistics || typeof statistics !== "object" || Array.isArray(statistics)) {
    return false;
  }
  const fields = Object.keys(statistics);
  if (fields.length === 0) {
    return false;
  }
  if (requireAllFields && !statisticFields.every((field) => field in statistics)) {
    return false;
  }
  return fields.every(
    (field) => statisticFields.includes(field) && isValidScore(statistics[field])
  );
};
var isValidPlayer = (player) => {
  if (!player || typeof player !== "object" || Array.isArray(player)) {
    return false;
  }
  const hasRequiredFields = requiredPlayerFields.every((field) => field in player);
  const hasValidTextFields = typeof player.name === "string" && player.name.trim().length > 0 && typeof player.club === "string" && player.club.trim().length > 0 && typeof player.nationality === "string" && player.nationality.trim().length > 0 && typeof player.position === "string" && player.position.trim().length > 0;
  return hasRequiredFields && hasValidTextFields && isValidStatistics(player.statistics, true);
};
var getNextPlayerId = () => __async(null, null, function* () {
  const players = yield findAllPlayers();
  return players.reduce((highestId, player) => Math.max(highestId, player.id), 0) + 1;
});
var contains = (value, search) => search ? value.toLowerCase().includes(search.toLowerCase()) : true;
var getPlayerService = (..._0) => __async(null, [..._0], function* (filters = {}) {
  const players = yield findAllPlayers();
  const data = players.filter(
    (player) => contains(player.name, filters.name) && contains(player.club, filters.club) && contains(player.nationality, filters.nationality) && contains(player.position, filters.position)
  );
  if (data.length) {
    return ok(data);
  }
  return noContent();
});
var getPlayerByIdService = (id) => __async(null, null, function* () {
  if (isInvalidId(id)) {
    return badRequest("Invalid player id");
  }
  const data = yield findPlayerById(id);
  if (data) {
    return ok(data);
  }
  return notFound("Player not found");
});
var createPlayerService = (player) => __async(null, null, function* () {
  var _a;
  if (!isValidPlayer(player)) {
    return badRequest("Invalid player payload");
  }
  if (player.id !== void 0 && isInvalidId(player.id)) {
    return badRequest("Invalid player id");
  }
  const id = (_a = player.id) != null ? _a : yield getNextPlayerId();
  const existingPlayer = yield findPlayerById(id);
  if (existingPlayer) {
    return conflict("Player id already exists");
  }
  const createdPlayer = yield insertPlayer(__spreadProps(__spreadValues({}, player), {
    id,
    name: player.name.trim(),
    club: player.club.trim(),
    nationality: player.nationality.trim(),
    position: player.position.trim()
  }));
  return created(createdPlayer);
});
var deletePlayerService = (id) => __async(null, null, function* () {
  if (isInvalidId(id)) {
    return badRequest("Invalid player id");
  }
  const isDeleted = yield deleteOnePlayer(id);
  if (isDeleted) {
    return ok({ message: "Player deleted" });
  }
  return notFound("Player not found");
});
var updatePlayerService = (id, statistics) => __async(null, null, function* () {
  if (isInvalidId(id)) {
    return badRequest("Invalid player id");
  }
  if (!isValidStatistics(statistics)) {
    return badRequest("Invalid statistics payload");
  }
  const data = yield findAndModifyPlayer(id, statistics);
  if (!data) {
    return notFound("Player not found");
  }
  return ok(data);
});

// src/controllers/players-controller.ts
var getPlayer = (req, res) => __async(null, null, function* () {
  var _a, _b, _c, _d;
  const httpResponse = yield getPlayerService({
    name: (_a = req.query.name) == null ? void 0 : _a.toString(),
    club: (_b = req.query.club) == null ? void 0 : _b.toString(),
    nationality: (_c = req.query.nationality) == null ? void 0 : _c.toString(),
    position: (_d = req.query.position) == null ? void 0 : _d.toString()
  });
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getPlayerById = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const httpResponse = yield getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var postPlayer = (req, res) => __async(null, null, function* () {
  const bodyValue = req.body;
  const httpResponse = yield createPlayerService(bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var deletePlayer = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const httpResponse = yield deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var updatePlayer = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const bodyValue = req.body;
  const httpResponse = yield updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/data/clubs.json
var clubs_default = [
  {
    id: 1,
    name: "Real Madrid"
  },
  {
    id: 2,
    name: "Barcelona"
  },
  {
    id: 3,
    name: "Manchester City"
  },
  {
    id: 4,
    name: "Arsenal"
  },
  {
    id: 5,
    name: "Manchester United"
  },
  {
    id: 6,
    name: "Bayern Munich"
  },
  {
    id: 7,
    name: "Sevilla"
  },
  {
    id: 8,
    name: "Napoli"
  },
  {
    id: 9,
    name: "Benfica"
  },
  {
    id: 10,
    name: "Feyenoord"
  },
  {
    id: 11,
    name: "Paris Saint-Germain"
  },
  {
    id: 12,
    name: "Porto"
  },
  {
    id: 13,
    name: "Inter Milan"
  },
  {
    id: 14,
    name: "Atletico Madrid"
  },
  {
    id: 15,
    name: "Borussia Dortmund"
  },
  {
    id: 16,
    name: "AC Milan"
  },
  {
    id: 17,
    name: "RB Leipzig"
  },
  {
    id: 18,
    name: "Lazio"
  },
  {
    id: 19,
    name: "RB Salzburg"
  },
  {
    id: 20,
    name: "Celtic"
  },
  {
    id: 21,
    name: "Newcastle United"
  },
  {
    id: 22,
    name: "Red Star Belgrade"
  },
  {
    id: 23,
    name: "Young Boys"
  },
  {
    id: 24,
    name: "Shakhtar Donetsk"
  },
  {
    id: 25,
    name: "Royal Antwerp"
  },
  {
    id: 26,
    name: "FC Copenhagen"
  },
  {
    id: 27,
    name: "Galatasaray"
  },
  {
    id: 28,
    name: "PSV Eindhoven"
  },
  {
    id: 29,
    name: "Lens"
  },
  {
    id: 30,
    name: "Sporting Braga"
  },
  {
    id: 31,
    name: "Union Berlin"
  },
  {
    id: 32,
    name: "Real Sociedad"
  }
];

// src/repositories/clubs-repository.ts
var findAllClubs = () => __async(null, null, function* () {
  return [...clubs_default];
});
var findClubById = (id) => __async(null, null, function* () {
  return clubs_default.find((club) => club.id === id);
});

// src/services/clubs-service.ts
var getClubService = () => __async(null, null, function* () {
  const data = yield findAllClubs();
  const response = data.length ? yield ok(data) : yield noContent();
  return response;
});
var getClubByIdService = (id) => __async(null, null, function* () {
  if (!Number.isInteger(id) || id <= 0) {
    return badRequest("Invalid club id");
  }
  const data = yield findClubById(id);
  if (data) {
    return ok(data);
  }
  return notFound("Club not found");
});

// src/controllers/clubs-controller.ts
var getClubs = (req, res) => __async(null, null, function* () {
  const response = yield getClubService();
  res.status(response.statusCode).json(response.body);
});
var getClubById = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const response = yield getClubByIdService(id);
  res.status(response.statusCode).json(response.body);
});

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/", (_req, res) => {
  res.status(200).json({
    name: "Champions API",
    endpoints: ["/players", "/players/:id", "/clubs", "/clubs/:id"]
  });
});
router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerById);
router.get("/clubs", getClubs);
router.get("/clubs/:id", getClubById);
var routes_default = router;

// src/app.ts
function createApp() {
  const app2 = (0, import_express2.default)();
  const corsOptions = {
    origin: ["http://felipao.sistem.com", "http://gov.br"],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
  };
  app2.use((0, import_cors.default)(corsOptions));
  app2.use(import_express2.default.json());
  app2.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });
  app2.use("/api", routes_default);
  app2.use((_req, res) => __async(null, null, function* () {
    const response = yield notFound("Route not found");
    res.status(response.statusCode).json(response.body);
  }));
  app2.use(
    (err, _req, res, _next) => __async(null, null, function* () {
      var _a, _b;
      const statusCode = (_b = (_a = err.statusCode) != null ? _a : err.status) != null ? _b : 500;
      const response = statusCode === 400 ? yield badRequest("Invalid JSON body") : yield internalServerError();
      if (statusCode >= 500) {
        console.error(err);
      }
      res.status(response.statusCode).json(response.body);
    })
  );
  return app2;
}
var app_default = createApp;

// src/server.ts
var app = app_default();
var port = Number(process.env.PORT) || 3333;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

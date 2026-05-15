import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

const requiredPlayerFields: Array<keyof PlayerModel> = [
  "name",
  "club",
  "nationality",
  "position",
  "statistics",
];

const statisticFields: Array<keyof StatisticsModel> = [
  "Overall",
  "Pace",
  "Shooting",
  "Passing",
  "Dribbling",
  "Defending",
  "Physical",
];

const isInvalidId = (id: number) => !Number.isInteger(id) || id <= 0;

const isValidScore = (value: unknown) =>
  typeof value === "number" &&
  Number.isFinite(value) &&
  value >= 0 &&
  value <= 100;

const isValidStatistics = (
  statistics: Partial<StatisticsModel>,
  requireAllFields = false
) => {
  if (!statistics || typeof statistics !== "object" || Array.isArray(statistics)) {
    return false;
  }

  const fields = Object.keys(statistics) as Array<keyof StatisticsModel>;
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

const isValidPlayer = (player: PlayerModel) => {
  if (!player || typeof player !== "object" || Array.isArray(player)) {
    return false;
  }

  const hasRequiredFields = requiredPlayerFields.every((field) => field in player);
  const hasValidTextFields =
    typeof player.name === "string" &&
    player.name.trim().length > 0 &&
    typeof player.club === "string" &&
    player.club.trim().length > 0 &&
    typeof player.nationality === "string" &&
    player.nationality.trim().length > 0 &&
    typeof player.position === "string" &&
    player.position.trim().length > 0;

  return (
    hasRequiredFields &&
    hasValidTextFields &&
    isValidStatistics(player.statistics, true)
  );
};

const getNextPlayerId = async () => {
  const players = await PlayerRepository.findAllPlayers();
  return players.reduce((highestId, player) => Math.max(highestId, player.id), 0) + 1;
};

type PlayerFilters = {
  name?: string;
  club?: string;
  nationality?: string;
  position?: string;
};

const contains = (value: string, search?: string) =>
  search ? value.toLowerCase().includes(search.toLowerCase()) : true;

export const getPlayerService = async (filters: PlayerFilters = {}) => {
  const players = await PlayerRepository.findAllPlayers();
  const data = players.filter(
    (player) =>
      contains(player.name, filters.name) &&
      contains(player.club, filters.club) &&
      contains(player.nationality, filters.nationality) &&
      contains(player.position, filters.position)
  );

  if (data.length) {
    return HttpResponse.ok(data);
  }

  return HttpResponse.noContent();
};

export const getPlayerByIdService = async (id: number) => {
  if (isInvalidId(id)) {
    return HttpResponse.badRequest("Invalid player id");
  }

  const data = await PlayerRepository.findPlayerById(id);

  if (data) {
    return HttpResponse.ok(data);
  }

  return HttpResponse.notFound("Player not found");
};

export const createPlayerService = async (player: PlayerModel) => {
  if (!isValidPlayer(player)) {
    return HttpResponse.badRequest("Invalid player payload");
  }

  if (player.id !== undefined && isInvalidId(player.id)) {
    return HttpResponse.badRequest("Invalid player id");
  }

  const id = player.id ?? (await getNextPlayerId());
  const existingPlayer = await PlayerRepository.findPlayerById(id);

  if (existingPlayer) {
    return HttpResponse.conflict("Player id already exists");
  }

  const createdPlayer = await PlayerRepository.insertPlayer({
    ...player,
    id,
    name: player.name.trim(),
    club: player.club.trim(),
    nationality: player.nationality.trim(),
    position: player.position.trim(),
  });

  return HttpResponse.created(createdPlayer);
};

export const deletePlayerService = async (id: number) => {
  if (isInvalidId(id)) {
    return HttpResponse.badRequest("Invalid player id");
  }

  const isDeleted = await PlayerRepository.deleteOnePlayer(id);

  if (isDeleted) {
    return HttpResponse.ok({ message: "Player deleted" });
  }

  return HttpResponse.notFound("Player not found");
};

export const updatePlayerService = async (
  id: number,
  statistics: Partial<StatisticsModel>
) => {
  if (isInvalidId(id)) {
    return HttpResponse.badRequest("Invalid player id");
  }

  if (!isValidStatistics(statistics)) {
    return HttpResponse.badRequest("Invalid statistics payload");
  }

  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

  if (!data) {
    return HttpResponse.notFound("Player not found");
  }

  return HttpResponse.ok(data);
};

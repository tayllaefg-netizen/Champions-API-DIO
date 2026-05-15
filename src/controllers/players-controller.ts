import { Request, Response } from "express";
import * as service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService({
    name: req.query.name?.toString(),
    club: req.query.club?.toString(),
    nationality: req.query.nationality?.toString(),
    position: req.query.position?.toString(),
  });
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await service.deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const bodyValue: Partial<StatisticsModel> = req.body;
  const httpResponse = await service.updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

import clubs from "../data/clubs.json";
import { ClubModel } from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return [...clubs];
};

export const findClubById = async (
  id: number
): Promise<ClubModel | undefined> => {
  return clubs.find((club) => club.id === id);
};

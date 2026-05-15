import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = data.length
    ? await HttpResponse.ok(data)
    : await HttpResponse.noContent();
  return response;
};

export const getClubByIdService = async (id: number) => {
  if (!Number.isInteger(id) || id <= 0) {
    return HttpResponse.badRequest("Invalid club id");
  }

  const data = await repository.findClubById(id);

  if (data) {
    return HttpResponse.ok(data);
  }

  return HttpResponse.notFound("Club not found");
};

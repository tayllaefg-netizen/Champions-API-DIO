import { HttpResponse } from "../models/http-response-model";

export const ok = async <T>(data: T): Promise<HttpResponse<T>> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = async <T>(
  data?: T
): Promise<HttpResponse<T | { message: string }>> => {
  return {
    statusCode: 201,
    body: data ?? { message: "successful" },
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (
  message = "Bad request"
): Promise<HttpResponse<{ message: string }>> => {
  return {
    statusCode: 400,
    body: { message },
  };
};

export const notFound = async (
  message = "Resource not found"
): Promise<HttpResponse<{ message: string }>> => {
  return {
    statusCode: 404,
    body: { message },
  };
};

export const conflict = async (
  message = "Resource already exists"
): Promise<HttpResponse<{ message: string }>> => {
  return {
    statusCode: 409,
    body: { message },
  };
};

export const internalServerError = async (
  message = "Internal server error"
): Promise<HttpResponse<{ message: string }>> => {
  return {
    statusCode: 500,
    body: { message },
  };
};

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import * as HttpResponse from "./utils/http-helper";

function createApp() {
  const app = express();

  const corsOptions = {
    origin: ["http://felipao.sistem.com", "http://gov.br"],
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.use("/api", router);

  app.use(async (_req, res) => {
    const response = await HttpResponse.notFound("Route not found");
    res.status(response.statusCode).json(response.body);
  });

  app.use(
    async (
      err: Error & { status?: number; statusCode?: number },
      _req: Request,
      res: Response,
      _next: NextFunction
    ) => {
      const statusCode = err.statusCode ?? err.status ?? 500;
      const response =
        statusCode === 400
          ? await HttpResponse.badRequest("Invalid JSON body")
          : await HttpResponse.internalServerError();

      if (statusCode >= 500) {
        console.error(err);
      }

      res.status(response.statusCode).json(response.body);
    }
  );

  return app;
}

export default createApp;

import { Router } from "express";
import type { Request, Response } from "express";

import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.json({
    message: "Welcome!"
  });
});

router.post("/users", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { router };

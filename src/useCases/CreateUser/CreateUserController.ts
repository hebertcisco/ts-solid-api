import type { Request, Response } from "express";

import type { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      await this.createUserCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          message: err.message || "Unexpected error.",
        });
      }
      throw err;
    }
  }
}

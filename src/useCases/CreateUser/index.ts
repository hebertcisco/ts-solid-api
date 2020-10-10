import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { MailtrapMailProvider } from "./../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";

const mailtrapProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapProvider
);
const createUserController = new CreateUserController(createUserUseCase);
export { createUserUseCase, createUserController };

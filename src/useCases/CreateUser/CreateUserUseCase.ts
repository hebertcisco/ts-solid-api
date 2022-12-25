import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  public constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  public async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }
    const user = new User(data);
    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do app",
        email: "equipe@myapp.com",
      },
      subject: "Wellcome to platform",
      body: "<p>You can made loggin on our platform</p>",
    });
  }
}

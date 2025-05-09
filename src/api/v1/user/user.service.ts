import { HttpStatus, Injectable } from "@nestjs/common";

import { User } from "@/domain/entities";
import { UserRepository } from "./user.repository";
import { AppError, Validator } from "@/utils";
import CreateUserDto from "@/domain/dto/user/create-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  // async create(user: CreateUserDto): Promise<[User | null, AppError | null]> {
  //   try {
  //     //#region Valida se o email já está sendo utilizado
  //     const currentUser = await this.userRepo.findByEmail(user.email);

  //     if (currentUser) {
  //       return [
  //         null,
  //         new AppError({
  //           messageToUser: `O email ${user.email} já está sendo utilizado.`,
  //           statusCode: HttpStatus.CONFLICT,
  //         }),
  //       ];
  //     }
  //     //#endregion

  //     //#region Validar email
  //     if (!Validator.email(user.email)) {
  //       return [
  //         null,
  //         new AppError({
  //           messageToUser:
  //             "O email não é valido, favor inserir no formato correto, ex: user@example.com.",
  //           statusCode: HttpStatus.CONFLICT,
  //         }),
  //       ];
  //     }
  //     //#endregion

  //     //#region Validar CPF
  //     if (!Validator.cpf(user.cpf)) {
  //       return [
  //         null,
  //         new AppError({
  //           messageToUser: "O CPF não é válido.",
  //           statusCode: HttpStatus.BAD_REQUEST,
  //         }),
  //       ];
  //     }
  //     //#endregion

  //     //#region Validar celular
  //     if (!Validator.cellphone(user.cellphone)) {
  //       return [
  //         null,
  //         new AppError({
  //           messageToUser:
  //             "O celular não é válido, favor inserir no formato correto: (DDD) 9xxxx-xxxx.",
  //           statusCode: HttpStatus.BAD_REQUEST,
  //         }),
  //       ];
  //     }
  //     //#endregion

  //     const result = await this.userRepo.insert(user);
  //     console.log(result);
  //     // result.identifiers[0];

  //     return [null, null];
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       // TODO Handle DB specific errors
  //     }

  //     return [null, null];
  //   }
  // }
}

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Injectable,
  Post,
  Res,
} from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { FastifyReply } from "fastify";

import CreateUserDto from "@/domain/dto/user/create-user.dto";
import { UserService } from ".";

@Injectable()
@Controller({ path: "user", version: "1" })
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({ summary: "Create user" })
  @HttpCode(HttpStatus.BAD_REQUEST)
  async create(@Body() body: CreateUserDto, @Res() res: FastifyReply) {
    // const [result, error] = await this.userService.create(body);

    const [result, error] = [4, 5];
    return res.status(HttpStatus.CREATED).send({
      message: "Hello with body",
      data: result,
      error: error,
    });
  }
}

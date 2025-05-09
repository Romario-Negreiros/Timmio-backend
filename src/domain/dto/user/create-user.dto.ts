import { ApiProperty } from "@nestjs/swagger";

class CreateUserDto {
  @ApiProperty({ example: 9 })
  roleId: number;

  @ApiProperty({ example: "user@example.com" })
  email: string;

  @ApiProperty({ example: "John Doe" })
  name: string;

  @ApiProperty({ example: "Abc@1234" })
  password: string;

  @ApiProperty({ example: "(11) 96638-3965" })
  cellphone: string;

  @ApiProperty({ example: "XXX.XXX.XXX-XX" })
  cpf: string;
}

export default CreateUserDto;

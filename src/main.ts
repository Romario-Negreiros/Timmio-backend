import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

async function bootstrap() {
  // #region App config
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);
  const apiUrlPrefix = configService.get<string>("API_URL_PREFIX") || "";
  const port = configService.get<number>("PORT") || 3000;

  app.setGlobalPrefix(apiUrlPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  //#endregion

  // #region Swagger config
  const config = new DocumentBuilder()
    .setTitle("Timmio API - V1")
    .setDescription("Documentação e ambiente para testes da API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiUrlPrefix}/v1/docs`, app, document);
  //#endregion

  await app.listen(port);
}

void bootstrap();

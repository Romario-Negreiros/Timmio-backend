import { NestFactory } from "@nestjs/core";
import { VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const apiUrlPrefix = configService.get<string>("API_URL_PREFIX") || "";
  const port = configService.get<number>("PORT") || 3000;

  app.setGlobalPrefix(apiUrlPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(port);
}

void bootstrap();

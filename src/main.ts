import AppDataSource from "./config/db.config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log("oi");

  AppDataSource.initialize()
    .then(() => {
      console.log("abcaodijaisjas");
    })
    .catch((error) => console.log(error));
}

void bootstrap();

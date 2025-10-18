import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';

async function bootstrap() {
  const app = await NestFactory.create(ProfileModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

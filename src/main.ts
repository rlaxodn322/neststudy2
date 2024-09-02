import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Rate Limiting 설정
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15분
    max: 100, // 각 IP당 최대 100 요청
  });
  app.use(limiter);

  // Helmet을 사용한 보안 헤더 설정
  app.use(helmet());



  // 보안 헤더 추가 설정
  app.use((req, res, next) => {
    res.setHeader('X-DNS-Prefetch-Control', 'off');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
  });

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();

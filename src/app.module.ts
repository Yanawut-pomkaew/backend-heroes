import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroSectionModule } from './hero-section/hero-section.module';

@Module({
  imports: [HeroSectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 
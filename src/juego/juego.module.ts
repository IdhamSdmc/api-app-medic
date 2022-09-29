import { Module } from '@nestjs/common';
import { JuegoService } from './juego.service';
import { JuegoController } from './juego.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Juego } from './entities/juego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Juego])],
  controllers: [JuegoController],
  providers: [JuegoService],
})
export class JuegoModule {}

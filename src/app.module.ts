import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { Empresa } from './empresas/entities/empresa.entity';
import { JuegoModule } from './juego/juego.module';
import { Juego } from './juego/entities/juego.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '35.208.51.255',
      port: 3306,
      username: 'uc9ahfxwazcwc',
      password: '@@@fercolor$$$',
      database: 'dbivggvxcan6uw',
      entities: [Empresa, Juego],
      synchronize: true,
    }),
    EmpresasModule,
    JuegoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

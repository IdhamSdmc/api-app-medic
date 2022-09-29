import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { Empresa } from './empresas/entities/empresa.entity';
import { JuegoModule } from './juego/juego.module';
import { Juego } from './juego/entities/juego.entity';
import {ConfigModule} from "@nestjs/config";



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
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

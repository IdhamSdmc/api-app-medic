import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';
import { Juego } from './entities/juego.entity';

@Injectable()
export class JuegoService {
  constructor(
    @InjectRepository(Juego) private juegoRepository: Repository<Juego>,
  ){}
  create(createJuegoDto: CreateJuegoDto) {
    const newGame = this.juegoRepository.create({
      ...createJuegoDto,
      gam_createdAt: new Date(),
      gam_updatedAt: new Date(),
    });
    return this.juegoRepository.save(newGame);
  }

  findAll() {
    return this.juegoRepository.find();
  }

  findOne(id: number) {
    return this.juegoRepository.findOneBy({ gam_Id: id });
  }

  async update(id: number, updateJuegoDto: UpdateJuegoDto) {
    await this.juegoRepository.update(
      { gam_Id: id },
      { ...updateJuegoDto, gam_updatedAt: new Date() },
    );
  }

  remove(id: number) {
    return this.juegoRepository.delete({ gam_Id: id });
  }
}

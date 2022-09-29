/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa) private empresaRepository: Repository<Empresa>,
  ){}

  create(createEmpresaDto: CreateEmpresaDto) {
    const newEmpresa = this.empresaRepository.create({
      ...createEmpresaDto,
      emp_createdAt: new Date(),
      emp_updatedAt: new Date(),
      emp_estado: 1
    });
    return this.empresaRepository.save(newEmpresa);
    
  }

  findAll() {
    return this.empresaRepository.find();
  }

  findOne(id: number) {
    return this.empresaRepository.findOneBy({emp_Id: id});
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    await this.empresaRepository.update({ emp_Id: id }, { ...updateEmpresaDto, emp_updatedAt: new Date() })
    
  }

  async remove(id: number) {
    await this.empresaRepository.delete({emp_Id: id});
  }
}

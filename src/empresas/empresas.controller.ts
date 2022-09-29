import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.create(createEmpresaDto);
  }

  @Get()
  async findAll() {
    const enterprises = await this.empresasService.findAll();
    return {
      ok: true,
      msg: 'Query success',
      data: enterprises,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const enterprise = await this.empresasService.findOne(+id);
    return {
      ok: true,
      msg: 'Query success',
      data: enterprise,
    };
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresasService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.empresasService.remove(+id);
  }
}

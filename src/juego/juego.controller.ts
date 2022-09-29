import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JuegoService } from './juego.service';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';

@Controller('juego')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

  @Post()
  create(@Body() createJuegoDto: CreateJuegoDto) {
    return this.juegoService.create(createJuegoDto);
  }

  @Get()
  async findAll() {
    const games = await this.juegoService.findAll();
    return {
      ok: true,
      msg: 'Query success',
      data: games,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const game = await this.juegoService.findOne(+id);
    return {
      ok: true,
      msg: 'Query success',
      data: game,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJuegoDto: UpdateJuegoDto) {
    return this.juegoService.update(+id, updateJuegoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juegoService.remove(+id);
  }
}

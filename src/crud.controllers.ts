import { Controller, Get } from '@nestjs/common';

@Controller('crud')

export class CrudController {
    @Get()
    findAll(): string {
        return 'Data Contact'
    } 



}
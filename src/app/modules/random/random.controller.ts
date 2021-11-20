import { Controller, Get, Render } from '@nestjs/common';
import { IRandom } from '../../interfaces/random.interface';

@Controller('random')
export class RandomController {
    constructor(){}
    @Get()
    @Render('pages/game/random')
    async root(){
        return {
            num: 'Game Random Chẵn, Lẻ, CC & BB',
            text: 'Nhấn vào nút Random bên dưới để xem kết quả! Let Go!',
        };
    }
}

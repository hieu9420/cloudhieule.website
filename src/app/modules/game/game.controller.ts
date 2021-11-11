import { Controller, Get, Render } from '@nestjs/common';

@Controller('game')
export class GameController {
    constructor(){};

    gameScripts = [
        { script: '/js/luckwheel.js' }
    ];

    @Get()
    @Render('pages/game/game')
    async root(){
        return {
            gameScripts: this.gameScripts,
            titlePage: 'Game',
            
        };
    }
}

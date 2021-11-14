import { Controller, Get, Render } from '@nestjs/common';

import * as dotenv from 'dotenv';

dotenv.config();

@Controller('login')
export class LoginController {
    constructor(){}

    @Get()
    @Render('pages/login/login')
    public async root(){
        const apiLink = process.env.API_LINK || 'http://localhost:3003/';
        return {apiLink: apiLink};
    }
}

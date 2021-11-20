import { Controller, Get, Render } from '@nestjs/common';

@Controller('cmsn')
export class CmsnController {
    constructor()
    {}

    @Get()
    @Render('pages/cmsn/cmsn')
    async root(){
        return;
    }
}

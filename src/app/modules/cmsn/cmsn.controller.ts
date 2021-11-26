import { Controller, Get, Render } from '@nestjs/common';

@Controller('cmsn')
export class CmsnController {
    constructor()
    {}
    @Get()
    @Render('pages/cmsn/cmsn')
    async root(){
        let toDate = new Date().getTime();
        let dateEvent = new Date(2021, 11, 6).getTime();

        let birthDay = false;
        if((dateEvent - toDate) <= 0){
            birthDay = true;
        }
        return{
            birthDay
        };
    }
}

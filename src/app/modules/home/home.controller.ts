import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';
import { Profile } from '../../schema/profile.schema';
import { TimeLine } from '../../schema/time.line.schema';
import { Point } from 'src/app/schema/point.schema';
import { Skill } from 'src/app/schema/skill.schema';

@Controller('/')
export class HomeController {
    constructor(private readonly homeService: HomeService,
    ) {}

    // headerScripts = [
    //     { script: '/js/handle.right.menu.js' }
    // ];

    @Get()
    @Render('pages/home')
    async root() {
        return {
            titlePage: 'Home Page',
            // headerScripts: this.headerScripts,

        };
    }
    
}

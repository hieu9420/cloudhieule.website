import { Controller, Get, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Motel } from 'src/app/schema/motel.schema';
import { Request } from 'express';

@Controller('test')
export class TestController {
    constructor(){}

    @Get()
    async test(@Req() request: Request): Promise<Motel[]>{
        const cookie = request.cookies['jwt'];
        console.log('cookie: ', cookie)
        let motel = await axios.get(`http://localhost:3003/api/motel/getmotel`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Authorization" : `Bearer ${cookie}`
            },
        })
        .then(res => {
            return res.data;
        })
        .catch(error => console.log(error))
        return motel;
      }
}

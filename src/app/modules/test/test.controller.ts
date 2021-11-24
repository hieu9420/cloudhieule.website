import { Controller, Get, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { Motel } from 'src/app/schema/motel.schema';

@Controller('test')
export class TestController {
    constructor(){}

    @Get()
    async test(): Promise<Motel[]>{

        return await axios.get(`http://localhost:3008/api/motel/getmotel`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        })
        .then(res => {
            return res.data;
        })
        .catch(error => console.log(error))
      }

    @Get('logout')
    async logout(){
        return await axios.post(`http://localhost:3008/api/auth/logout`, null, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        })
        .then(res => {
            return res.data;
        })
        .catch(error => console.log(error))
    }
}

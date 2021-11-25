import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Request, Response } from 'express';
import { API_LIST } from 'src/config/contains/shared.api.link';

@Controller('chat')
export class ChatController {
    constructor(){}

    @Get()
    @Render('pages/chat/chat')
    async root(@Req() request: Request, @Res() response: Response){
        const cookie = request.cookies['jwt'];

        if(!cookie){
            response.redirect('/login');
        }

        //save data
        let user = await axios.get(API_LIST.API_GET_USER, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Authorization" : `Bearer ${cookie}`
            }}
        ).then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });

        return {
            userId: user._id,
            userName: user.username
        }

    }
}

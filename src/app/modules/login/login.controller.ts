import { Body, Controller, Get, Post, Redirect, Render, Res, UnauthorizedException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Response } from 'express';
import { UserLogin } from 'src/app/dto/login.dto';
import { API_LIST } from '../../../config/contains/shared.api.link';

@Controller('login')
export class LoginController {
    constructor(){}

    @Get()
    @Render('pages/login/login')
    public async root(){
        const apiLink = API_LIST.API_LOGIN;
        return {apiLink: apiLink};
    }

    @Post()
    async login(@Body() loginModel: UserLogin, @Res() response: Response){
        await axios.post(API_LIST.API_LOGIN, loginModel, { withCredentials: true })
        .then((res: AxiosResponse) => {
            if(res.data.token){
                response.cookie('jwt', res.data.token, { expires: new Date(Date.now() + 900000), httpOnly: true })
                response.redirect('/');
            }
            else{
                response.redirect('/');
            }
        })
        .catch(error => response.redirect('/login'));
    }
}

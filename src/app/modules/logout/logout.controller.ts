import { Controller, Get, Post, Redirect, Res } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_LIST } from '../../../config/contains/shared.api.link';
import axios, { AxiosResponse } from 'axios';
import { Response } from 'express';

@Controller('logout')
export class LogoutController {

    constructor(){}

    @Get()
    @Redirect('/')
    async root(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return{
            message: 'Logout Success!'
        }
    }
}

import { Controller, Get, Post, Render, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import path, { extname } from 'path';
import { PhotosService } from './photos.service';
import { Request, Response } from 'express';

@Controller('photos')
export class PhotosController {
    constructor(
      private photosService: PhotosService
    ){}

    @Get()
    @Render('pages/photos/photos')
    async root(){
        
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor("photo", { storage: diskStorage({
        destination: './src/public/uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + extname(file.originalname))
        }
      })}))
    async uploadSingle(@UploadedFile() file, @Req() request: Request, @Res() response: Response) {
      const cookie = request.cookies['jwt'];

      if(!cookie){
          response.redirect('/login');
      }

      await this.photosService.saveAvatar(file.filename, 'hieu-le');
    }

    @Post("uploads")
    @UseInterceptors(FilesInterceptor("photos[]", 10, { dest: "./src/public/uploads" }))
    uploadMultiple(@UploadedFiles() files) {
        console.log(files);
    }
}

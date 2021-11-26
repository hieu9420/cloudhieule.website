import { Controller, Get, Post, Render, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('photos')
export class PhotosController {
    constructor(){}

    @Get()
    @Render('pages/photos/photos')
    async root(){
        
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor("photo", { dest: "./src/uploads" }))
    uploadSingle(@UploadedFile() file) {
        console.log(file);
    }

    @Post("uploads")
    @UseInterceptors(FilesInterceptor("photos[]", 10, { dest: "./src/uploads" }))
    uploadMultiple(@UploadedFiles() files) {
        console.log(files);
    }
}

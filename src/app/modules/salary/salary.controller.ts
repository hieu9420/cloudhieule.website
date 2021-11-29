import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Salary, SalaryDocument } from 'src/app/schema/salary.schema';
import { SalaryService } from './salary.service';

@Controller('salary')
export class SalaryController {
    constructor(
        @InjectModel(Salary.name) private salaryModel: Model<SalaryDocument>,
        private readonly salaryService: SalaryService
    ){}

    salaryRecord: Salary[];

    @Get()
    @Render('pages/salary/salary')
    async root(){
        let toDate = new Date();
        let total = 0;
        let monthToDate = toDate.getMonth();
        
        // let newDate = new Date(toDate.getFullYear(), monthToDate + 1, 0);
        // let lastDateOfMonth = new Date(newDate.toString()).getDate();
        let time = (monthToDate + 1) + '-' + toDate.getFullYear();
        let chilTime = 'Từ 07-' + (monthToDate + 1) + '-' + toDate.getFullYear() + ' Đến 07-' + (monthToDate + 2) + '-' + toDate.getFullYear();
        
        let startDate = new Date(toDate.getFullYear(), monthToDate, 7);
        let endDate = new Date(toDate.getFullYear(), monthToDate + 1, 7);

        // this.salaryRecord = await this.salaryService.getAllSalaryRecord()
        let totalWorking = 0;
        let avg = 0;
        this.salaryRecord = await this.salaryService.getSalaryRecordByDate(startDate, endDate)
        .then(res => {
            for(let item of res){
                total += Number(item.totalSalary);
                totalWorking++;
            }
            if(totalWorking == 0){
                avg = 0;
            }
            else{
                avg = total/totalWorking;
            }
            return res;
        })
        .catch();

        let totalWithCC = total + 0;

        return{
            toDate,
            salaryRecord: this.salaryRecord,
            total: total,
            time: time,
            totalWithCC: totalWithCC,
            chilTime: chilTime,
            totalWorking: totalWorking,
            avg: avg,
        }
    }

    @Post('insert')
    @Redirect('/salary')
    async insertSalary(@Body() salaryDate: Salary){
        let totalSalary = this.salaryService.calcSalary(salaryDate.basicSalary, salaryDate.startTime, salaryDate.endTime, salaryDate.spectDayOT);
        return await this.salaryService.saveSalaryRecord(salaryDate, totalSalary);
    }

    @Post('edit')
    editSalary(@Body() salaryDate: Salary){
        let totalSalary = this.salaryService.calcSalary(salaryDate.basicSalary, salaryDate.startTime, salaryDate.endTime, salaryDate.spectDayOT);
        return this.salaryService.editSalaryRecord(salaryDate, totalSalary);
    }

    @Post('delete')
    deleteSalary(@Body() salaryDate: Salary){
        return this.salaryService.deleteOne(salaryDate._id);
    }

    @Post('filter')
    filterSalary(@Body() data){
        let endDate = new Date(data.dateEnd);
        let newDate = endDate.setDate(endDate.getDate() + 1);
        return this.salaryService.getSalaryRecordByDate(new Date(data.dateStart), newDate)
        .then(res => {
            return res;
        })
        .catch();
    }

    @Post('calcFirstMonth')
    calcFirstMonth(@Body() data){
        let toDate = new Date();
        let monthToDate = toDate.getMonth();
        let startDate = new Date(toDate.getFullYear(), monthToDate, 1);
        let endDate = new Date(toDate.getFullYear(), monthToDate + 1, 1);
        return this.salaryService.getSalaryRecordByDate(startDate, endDate)
        .then(res => {
            return res;
        })
        .catch();
    }

}

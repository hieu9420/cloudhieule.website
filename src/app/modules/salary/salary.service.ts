import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Salary, SalaryDocument } from 'src/app/schema/salary.schema';

@Injectable()
export class SalaryService {
    constructor(
        @InjectModel(Salary.name) private salaryModel: Model<SalaryDocument>,
    ){}

    public getTotalSunday(year, month){
        let day, counter, date;
        day = 1;
        counter = 0;
        date = new Date(year, month, day);
        while (date.getMonth() === month) {
            if (date.getDay() === 0) { // Sun=0, Mon=1, Tue=2, etc.
                counter += 1;
            }
            day += 1;
            date = new Date(year, month, day);
        }
        return counter;
    }

    public calcSalary(basicSalary: any,startTime, endTime, spectDayOT){
        let totalSalary = 0;
        let totalWorkingDay = 0;
        let perDate;
        let newDate = new Date(startTime);
        let currentDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
        let lastDateOfMonth = new Date(currentDate.toString()).getDate();
        totalWorkingDay = lastDateOfMonth - this.getTotalSunday(newDate.getFullYear(), newDate.getMonth());

        if(totalWorkingDay == 0){
            perDate = 0;
        }
        else{
            perDate = Number(basicSalary)/totalWorkingDay/8;
        }
        let oTNgay = 1.5;
        let oTDem = 2.1;
        let otNgayNghi = 1.5;
        let otNgayLe = 3;

        let totalTimeWork = new Date(endTime).getTime() - new Date(startTime).getTime();
        let hourWorking = totalTimeWork/1000/60/60;

        if(hourWorking > 14){
            hourWorking -= 1;
            totalSalary = 8*perDate + 5*perDate*oTNgay + (hourWorking-13)*perDate*oTDem;
        }
        else if(hourWorking <= 14 && hourWorking > 8.5){
            hourWorking -= 1;
            totalSalary = 8*perDate + (hourWorking-8)*perDate*oTNgay;
        }
        else{
            hourWorking -= 0.5;
            totalSalary = hourWorking*perDate;
        }

        if(spectDayOT == 'dayOff'){
            totalSalary = totalSalary*otNgayNghi;
        }
        else if(spectDayOT == 'holiday'){
            totalSalary = totalSalary*otNgayLe;
        }

        return totalSalary;
    }

    public saveSalaryRecord(salaryDate: Salary, totalSalary){
        let salaryDateModal = new this.salaryModel({
            _id: new Types.ObjectId(),
            startTime: salaryDate.startTime,
            endTime: salaryDate.endTime,
            basicSalary: salaryDate.basicSalary,
            totalSalary: totalSalary,
            spectDayOT: salaryDate.spectDayOT
        });
        return salaryDateModal.save();
    }

    public editSalaryRecord(salaryDate: Salary, totalSalary){
        return this.salaryModel.findByIdAndUpdate({_id: salaryDate._id}, {
            startTime: salaryDate.startTime,
            endTime: salaryDate.endTime,
            basicSalary: salaryDate.basicSalary,
            totalSalary: totalSalary,
            spectDayOT: salaryDate.spectDayOT
        }).exec();
    }

    public getAllSalaryRecord(): Promise<Salary[]>{
        return this.salaryModel.find({}).exec();
    }

    public getSalaryRecordByDate(startDate, endDate): Promise<Salary[]>{
        return this.salaryModel.find({
            startTime: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        }).exec();
    }

    public deleteOne(id){
        return this.salaryModel.deleteOne({_id: id}).exec();
    }
}

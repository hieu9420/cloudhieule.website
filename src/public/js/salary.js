$('#openModalEditOrDelete').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget)
    let id = button.data('id');
    let startTime = new Date(button.data('starttime'));
    let endTime = new Date(button.data('endtime'));
    
    let basicSalary = button.data('basicsalary');
    let spectDayOT = button.data('spectdayot');

    startTime.setMinutes(startTime.getMinutes() - startTime.getTimezoneOffset());
    endTime.setMinutes(endTime.getMinutes() - endTime.getTimezoneOffset());

    $(this).find('input[name="startTime"]').val(startTime.toISOString().slice(0,16));
    $(this).find('input[name="endTime"]').val(endTime.toISOString().slice(0,16));

    $(this).find('input[name="basicSalary"]').val(basicSalary);

    $(this).find(`option[value="${spectDayOT}"]`).attr('selected', 'selected')

    $(this).find('.btn-warning').attr('data-id', id);
    $(this).find('.btn-danger').attr('data-id', id);
  })

  //edit
$('.btn-edit').on('click', function(e){

    let $modal = $('#openModalEditOrDelete')

    let modalSalary = {};
    modalSalary._id = $(this).attr('data-id');
    modalSalary.startTime = $modal.find('input[name="startTime"]').val();
    modalSalary.endTime = $modal.find('input[name="endTime"]').val();
    modalSalary.basicSalary = $modal.find('input[name="basicSalary"]').val();
    modalSalary.spectDayOT = $modal.find('select[name="spectDayOT"]').val();

    $.ajax({
        type: 'POST',
        url: '/salary/edit',
        data: modalSalary,
        success: function(data){
            $('#openModalEditOrDelete').modal('hide');
            window.location.reload();
        }
    })
});

$('.btn-delete').on('click', function(e){
    let modalSalary = {};
    modalSalary._id = $(this).attr('data-id');

    $.ajax({
        type: 'POST',
        url: '/salary/delete',
        data: modalSalary,
        success: function(data){
            $('#openModalEditOrDelete').modal('hide');
            window.location.reload();
        }
    })
});

function renderData(data){
    $('.tbody-table').empty();
    let tamTinh = 0;
    let tbodyHTML = ``;
    let totalWorkingDay = 0;
    let avg = 0;
    $.each(data, function(index, salaryRecord){
        tamTinh += salaryRecord.totalSalary;
        totalWorkingDay++;
        tbodyHTML += `<tr data-id="${salaryRecord._id}" data-toggle="modal" 
                            data-startTime="${salaryRecord.startTime}"
                            data-endTime="${salaryRecord.endTime}"
                            data-basicSalary="${salaryRecord.basicSalary}"
                            data-spectDayOT="${salaryRecord.spectDayOT}"
                            data-totalSalary="${salaryRecord.totalSalary}"
                            data-target="#openModalEditOrDelete">
                                <td class="td-start-time">${moment(new Date(salaryRecord.startTime)).format('DD-MM-YYYY HH:mm')}</td>
                                <td class="td-end-time">${moment(new Date(salaryRecord.endTime)).format('DD-MM-YYYY HH:mm')}</td>
                                <td class="td-basic-salary">${(salaryRecord.basicSalary).toLocaleString('it-IT', {style: 'currency',currency: 'VND'})}</td>
                                <td class="td-spect-day">${salaryRecord.spectDayOT}</td>
                                <td class="td-total-salary">${(salaryRecord.totalSalary).toLocaleString('it-IT', {style: 'currency',currency: 'VND'})}</td>
                            </tr>`;
    });
    avg = totalWorkingDay == 0? 0 : tamTinh/totalWorkingDay;
    let endTable = `<tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th>Tạm Tính</th>
                        <th style="color: green;" class="th-total-salaty-tt">${tamTinh.toLocaleString('it-IT', {style: 'currency',currency: 'VND'})}</th>
                    </tr>
                    <tr>
                        <th>Chuyên cần</th>
                        <th>+ 0 VNĐ</th>
                        <td></td>
                        <th>Tổng Nhận</th>
                        <th style="color: green;" class="th-total-salaty-tn">${tamTinh.toLocaleString('it-IT', {style: 'currency',currency: 'VND'})}</th>
                    </tr>`;
    $('.tbody-table').html(tbodyHTML+endTable);
    let markup = `Đã làm ${totalWorkingDay} ngày, Trung bình lương/ngày: ${avg.toLocaleString('it-IT', {style: 'currency',currency: 'VND'})}`;
    $('.summary').text(markup);
}

$('.btn-filter').on('click', function(e){
    let startDate = $('input[name="dateFrom"]').val();
    let endDate = $('input[name="dateTo"]').val();
    

    if(!endDate){
        endDate = startDate;
    }

    $('.title-salary').text('Filter Salary Record');
    $('.child-title-salary').text('Từ ' + startDate + ' Đến ' + endDate);

    $.ajax({
        type: 'POST',
        url: '/salary/filter',
        data: {dateStart: startDate, dateEnd: endDate},
        success: function(data){
            renderData(data);
        }
    });
});

$('.btn-today').on('click', function(e){
    window.location.reload();
});

$('.btn-calc-dau-thang').on('click', function(e){
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    $('.title-salary').text('Lương nhận tháng ' + month);
    $('.child-title-salary').text('Từ 1 tây đến cuối tháng');

    $.ajax({
        type: 'POST',
        url: '/salary/calcFirstMonth',
        success: function(data){
            renderData(data);
        }
    });
});
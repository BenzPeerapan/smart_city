
function Date_now_TH() {
    const today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    if (month < 10){
        month = '0'+ month
    }
    if (date < 10){
        date = '0'+ date
    }
    const result_date = date+'-'+month+'-'+(today.getFullYear() + 543);
    return result_date;
}

function minDate() {
    const today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    if (month < 10){
        month = '0'+ month
    }
    if (date < 10){
        date = '0'+ date
    }
    const result_date = today.getFullYear()+'-'+month+'-'+date;
    return result_date;
}

export {
    minDate,
    Date_now_TH,
}

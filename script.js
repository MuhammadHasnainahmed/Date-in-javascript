const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function displaytime() {


    let datetime = new Date()
    const hour = datetime.getHours()
    const min = datetime.getMinutes()
    const sec = datetime.getSeconds()
    const d = new Date();
    let day = weekday[d.getDay()];
    
    if (hour > 24) {
        hour = 12
    }
    
    document.getElementById('hours').innerHTML =  hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('din').innerHTML = day;
}
setInterval(displaytime, 1000);



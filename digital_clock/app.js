function india() {
    let options={timeZone:'Asia/Kolkata'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#indian-date').innerText=currentDate;
    document.querySelector('#indian-time').innerText=currentTime;

}
setInterval(india,1000);

function usa() {
    let options={timeZone:'America/New_York'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').innerText=currentDate;
    document.querySelector('#usa-time').innerText=currentTime;

}
setInterval(usa,1000);

function china() {
    let options={timeZone:'Asia/Shanghai'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#china-date').innerText=currentDate;
    document.querySelector('#china-time').innerText=currentTime;

}
setInterval(china,1000)
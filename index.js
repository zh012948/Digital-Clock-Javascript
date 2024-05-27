const time = document.getElementById('time');

setInterval(function () {
    let date = new Date();
    let options = {hour12:true};
    time.innerHTML = date.toLocaleTimeString([],options);
}, 1000);
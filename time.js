setInterval(function () {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let time = hour + " : " + minute + " : " + second
    time.toLocaleString()
    document.getElementById('time').innerHTML = time;
}, 1000)

function getCurrentTime () {
    const today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time
}

document.getElementById('time').innerHTML = getCurrentTime();

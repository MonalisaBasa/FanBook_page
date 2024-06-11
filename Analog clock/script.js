function setClock(){
    const now =new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegree = (hour % 12) * 30 + minute / 2;
    const minuteDegree = minute * 6;
    const secondDegree = second * 6;

    document.getElementById('hour').style.transform =`rotate(${hourDegree}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setClock,1000);
setClock();
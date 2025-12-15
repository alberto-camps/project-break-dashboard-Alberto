
//--------Código para la hora y fecha-----------

function getPhrase(hour) {
    if (hour >= 0 && hour <= 7) {
      return "Es hora de descansar. Apaga y sigue mañana";
  } else if (hour > 7 && hour <= 12) {
      return "Buenos días, desayuna fuerte y a darle al código";
  } else if (hour > 12 && hour <= 14) {
      return "Echa un rato más pero no olvides comer";
  } else if (hour > 14 && hour <= 16) {
      return "Espero que hayas comido";
  } else if (hour > 16 && hour <= 18) {
      return "Buenas tardes, el último empujón";
  } else if (hour > 18 && hour <= 22) {
      return "Esto ya son horas extras, piensa en parar pronto";
  } else {
      return "Buenas noches, es hora de pensar en parar y descansar";
  }
}

const getHourAndDate = () => {
    const time = new Date();
    const date = new Date();

    const hour = String(time.getHours()).padStart(2, '0');
    const min = String(time.getMinutes()).padStart(2, '0');
    const sec = String(time.getSeconds()).padStart(2, '0');

    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = String(date.getFullYear());
    
    document.getElementById('time').textContent =`${hour}:${min}:${sec}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;

    const phrase = getPhrase(hour);
    document.getElementById('phrase').textContent = phrase;
}


getHourAndDate();
setInterval(getHourAndDate, 1000);

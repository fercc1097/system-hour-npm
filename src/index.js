// let isPM = false;
// if(time>12){
//   isPM = true;
//   time = time - 12;
// }else {
//   isPM = false;
// }
// const systemHour = `${time}:${today.getMinutes()} ${isPM ? "PM" : "AM"}`;

const systemHour = () => {
  const today = new Date();

  let time = today.getHours();
  var tanda;
  var conector;
  switch (true) {
    case time > 5 && time < 12:
      tanda = 'Mañana';
      conector = 'De La';
      break;
    case time > 11 && time < 13:
      tanda = 'Mediodia';
      conector = 'Del';
      break;
    case time > 12 && time < 19:
      tanda = 'Tarde';
      conector = 'De La';
      break;
    case time > 18 && time < 24:
      tanda = 'Noche';
      conector = 'De La';
      break;
    case time === 0:
      tanda = 'Noche';
      conector = 'De La';
      break;
    case time > 0 && time < 7:
      tanda = 'Madrugada';
      conector = 'De La';
      break;
    default:
      tanda = 'Unknown';
  }

  let minutos = today.getMinutes();

  if (minutos < 10) minutos = `0${minutos}`;

  return `${time}:${minutos} ${conector} ${tanda}`;
};

export default { systemHour };

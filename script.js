const today = new Date().getDay();
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

for (let i = 0; i < week.length; i++) {
    let day = week[i];

    if (i === today && (i === 0 || i === 6)) {
         day = `\x1b[1m\x1b[3m${day}\x1b[0m`;
    } else if (i === today) {
        day = `\x1b[1m${day}\x1b[0m`;
    } else if (i === 0 || i === 6) {
        day = `\x1b[3m${day}\x1b[0m`;
    }

    console.log(day)
}
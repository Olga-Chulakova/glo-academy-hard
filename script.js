// ПЕРВАЯ ЗАДАЧА
const ruDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const enDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let lang = 'ru';

// Через if
if (lang == 'ru') {
    for (let day of ruDays) {
        console.log(day);
    }
} else if (lang == 'en') {
    for (let day of enDays) {
        console.log(day);
    }
}

// через switch
switch(lang) {
    case 'ru':
        ruDays.forEach(day => console.log(day));
        break;
    case 'en':
        enDays.forEach(day => console.log(day));
        break;
    default:
        console.log('Другой язык не поддерживается');
}

// через многомерный массив
const days = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
}

let language = 'ru';
console.log(days[language].toString())

// ВТОРАЯ ЗАДАЧА

const namePerson = 'Артем'

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')
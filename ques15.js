const Guests = ['Allama iqbal', 'Quaid-e-azam', 'Hitler'];
Guests.forEach(mehman => {
    console.log(`Hello ! please accept my invitation  ${mehman} and come at my event.`);
});
console.log('OH ! just heard the news that Hitler cant make it to the dinner, so i am inviting someone else');
Guests.pop();
Guests.push("Imran Khan");
Guests.forEach(mehman => {
    console.log(`Hello ! please accept my invitation  ${mehman} and come at my event.`);
});
export {};

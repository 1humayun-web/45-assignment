const Guests: string[] = ['Allama iqbal','Quaid-e-azam','Hitler'];

Guests.forEach(mehman => {
    console.log(`Hello ! please accept my invitation  ${mehman} and come at my event.`);
});
console.log('OH ! just heard the news that Hitler cant make it to the dinner, so i am inviting someone else')
Guests.pop()
Guests.push("Imran Khan")

Guests.forEach(mehman => {
    console.log(`Hello ! please accept my invitation  ${mehman} and come at my event.`);
});

console.log("Hey guys ! I found a bigger table so i am inviting some more guests")
Guests.unshift("Altaf hussain")
Guests.push("zafar abbas")
Guests.splice(2,0,"Nawaz Sharif")
console.log(Guests)
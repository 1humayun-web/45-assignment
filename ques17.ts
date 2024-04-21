let Guests: string[] =[
    'Altaf hussain',
    'Allama iqbal',
    'Nawaz Sharif',
    'Quaid-e-azam',
    'Imran Khan',
    'zafar abbas'
  ]
  

while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

Guests.forEach(mehman => {
    console.log(`Dear ${mehman}, you're still invited to dinner.`);
});

Guests.splice(0, 2);

console.log(Guests); // Output: []

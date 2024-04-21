const magicians = ['humayun', 'wajih', 'mustafa'];
function showMagicians() {
    for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(element);
    }
}
showMagicians();
const modifiedMagicians = magicians.map(name => `The Great ${name}`);
console.log(modifiedMagicians);
export {};

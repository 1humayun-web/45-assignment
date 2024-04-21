const magicians : string[]=['humayun','wajih','mustafa']

function show_magician(){
    for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(element)
        
    }
    
}
show_magician()
function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(name => `Great ${name}`);
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}


const greatMagicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);

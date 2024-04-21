function make_shirts(size = "L", message = "I love typescript") {
    console.log(`The size of the shirt is "${size}"`);
    console.log(`The message on the shirt is "${message}"`);
}
make_shirts();
make_shirts("M");
make_shirts("S", "I am a coder");
export {};

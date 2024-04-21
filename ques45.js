function my_car(manufacturer, model, color, car_number) {
    const car_details = {
        manufacturer: manufacturer,
        model: model,
    };
    if (color !== undefined && car_number !== undefined) {
        car_details.color = color;
        car_details.car_number = car_number;
    }
    return car_details;
}
console.log(my_car('toyota', 'camry'));
console.log(my_car('BMW', 'M5', 'grey', 8055));
console.log(my_car('mercedes', 'cls500', '', 89765));
export {};

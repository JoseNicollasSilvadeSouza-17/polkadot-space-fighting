export default function randomWerewolf() {
    const max = 3;
    const min = 1;

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(random) {
        case 1: {
            return "red";
        }

        case 2: {
            return "white";
        }

        case 3: default: {
            return "black";
        }
    }
}
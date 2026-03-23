export default function randomWerewolf() {
    const max = 5;
    const min = 1;

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(random) {
        case 1: {
            return "red";
        }

        case 2: {
            return "white";
        }

        case 3: {
            return "brown";
        }

        case 4: {
            return "incandescent";
        }

        case 5: default: {
            return "black";
        }
    }
}
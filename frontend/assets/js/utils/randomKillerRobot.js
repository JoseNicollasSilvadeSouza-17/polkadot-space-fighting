export default function randomKillerRobot() {
    const max = 2;
    const min = 1;

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(random) {
        case 1: {
            return "efinity";
        }

        case 3: default: {
            return "polkadot";
        }
    }
}
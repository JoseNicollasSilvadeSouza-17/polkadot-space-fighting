const canvas = document.querySelector("#gameCanvas");
const backgroundSpace = document.querySelector("#backgroundSpace");
const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth");

const timer = document.querySelector("#timer");

const context = canvas.getContext("2d");

const WIDTH = 1024;
const HEIGHT = 576;

const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }  
}

const FONT = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';

let gravity = 0.0001;

let lastKey = "";

let isFinish = false;

let timerNumber = 60;
let timerId = null;

function setTimerNumber(newTimerNumber) {
    timerNumber = newTimerNumber;
}

function setTimerId(id) {
    timerId = id;
}

function setGravity(newGravity) {
    gravity = newGravity;
}

function setLastKey(newLastKey) {
    lastKey = newLastKey;
}

function setIsFinish(newIsFinish) {
    isFinish = newIsFinish;
}

export {
    canvas,
    backgroundSpace,
    playerHealth,
    enemyHealth,
    timer,
    context,
    WIDTH,
    HEIGHT,
    keys,
    FONT,
    gravity,
    lastKey,
    isFinish,
    timerNumber,
    timerId,
    setTimerNumber,
    setTimerId,
    setGravity,
    setLastKey,
    setIsFinish
};
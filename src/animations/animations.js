const MAX_HEIGHT = 100;
const timers = [];

// bg colors
const BG_CHECKING = "orange";
const BG_SWAPPED = "#1dc690";
const BG_SORTED = "#ec1a1a";
const BG_INITIAL = "#1a1416";

export const selectionSortAnimate = (animations, speed, onFinish, amount) => {
    if (animations === undefined) return;
    const dataBars = document.getElementsByClassName("data-bar");
    let currentIteration = 0;
    for (let i = 0; i < animations.length; i++) {
        if (animations[i].length === 3) {
            const [barOneInx, barTwoInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = BG_CHECKING;
            let timer = setTimeout(() => {
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
            }, i * speed);
            timers.push(timer);
        } else if (animations[i].length === 2) {
            const [barOneInx, barTwoInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            let timer = setTimeout(() => {
                barOneStyling.backgroundColor = BG_INITIAL;
                barTwoStyling.backgroundColor = BG_CHECKING;
            }, i * speed);
            timers.push(timer);
        } else if (animations[i].length === 4) {
            const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = BG_SWAPPED;
            let timer = setTimeout(() => {
                barOneStyling.height = Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barTwoStyling.height = Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
            }, i * speed);
            timers.push(timer);
        } else if (animations[i].length === 1) {
            const [barOneInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            // eslint-disable-next-line no-loop-func
            let timer = setTimeout(() => {
                barOneStyling.backgroundColor = BG_SORTED;
                for (let j = currentIteration + 1; j < amount; j++) {
                    dataBars[j].style.backgroundColor = BG_INITIAL;
                }
                currentIteration++;
            }, i * speed);
            timers.push(timer);
        }
    }

    return timers;
};

export const bubbleSortAnimate = (animations, speed, onFinish, amount) => {
    if (animations === undefined) return;
    const dataBars = document.getElementsByClassName("data-bar");
    let dataAmount = amount - 1;
    for (let i = 0; i < animations.length; i++) {
        // 0 !1 2 3 !4 5 6 !7 8
        const colorChange = i % 3 !== 1;
        if (colorChange) {
            const [barOneInx, barTwoInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = i % 3 === 0 ? BG_CHECKING : BG_INITIAL;
            // eslint-disable-next-line no-loop-func
            const timer = setTimeout(() => {
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
                // if fully sorted, turn red
                if (i % 3 !== 0 && barTwoInx === dataAmount) {
                    barTwoStyling.backgroundColor = BG_SORTED;
                    dataAmount--;
                }
                if (i === animations.length - 1) {
                    animateOnFinish();
                    // onFinish();
                }
            }, i * speed);
            timers.push(timer);
        } else {
            let timer;
            if (!animations[i].length) continue;
            const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = BG_SWAPPED;
            timer = setTimeout(() => {
                barOneStyling.height = Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barTwoStyling.height = Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
                if (i === animations.length - 1) console.log("done");
            }, i * speed);
            timers.push(timer);
        }
    }
    return timers;
};

const animateOnFinish = () => {
    const dataBars = document.getElementsByClassName("data-bar");
    for (let i = 0; i < dataBars.length; i++) {
        dataBars[i].style.backgroundColor = BG_SWAPPED;
    }
    setTimeout(() => {
        for (let i = 0; i < dataBars.length; i++) {
            dataBars[i].style.backgroundColor = BG_SORTED;
        }
    }, 500);
};

export const refreshAnimate = () => {
    const dataBars = document.getElementsByClassName("data-bar");
    for (let i = 0; i < dataBars.length; i++) {
        dataBars[i].style.backgroundColor = BG_INITIAL;
    }
};

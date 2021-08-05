const MAX_HEIGHT = 100;
const timers = [];
export const bubbleSortAnimate = (animations, speed, onFinish, amount) => {
    console.log(animations);
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
            const color = i % 3 === 0 ? "orange" : "#278ab0";
            // eslint-disable-next-line no-loop-func
            const timer = setTimeout(() => {
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
                // if fully sorted, turn red
                if (i % 3 !== 0 && barTwoInx === dataAmount) {
                    barTwoStyling.backgroundColor = "red";
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
            // if (!animations[i].length) {
            //     timer = setTimeout(() => {}, i * speed);
            //     continue;
            // }
            if (!animations[i].length) continue;
            const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            timer = setTimeout(() => {
                barOneStyling.height = Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barTwoStyling.height = Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barOneStyling.backgroundColor = "#1dc690";
                barTwoStyling.backgroundColor = "#1dc690";
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
        dataBars[i].style.backgroundColor = "#1dc690";
    }
    setTimeout(() => {
        for (let i = 0; i < dataBars.length; i++) {
            dataBars[i].style.backgroundColor = "#278ab0";
        }
    }, 500);
};

export const refreshAnimate = () => {
    const dataBars = document.getElementsByClassName("data-bar");
    for (let i = 0; i < dataBars.length; i++) {
        dataBars[i].style.backgroundColor = "#278ab0";
    }
};

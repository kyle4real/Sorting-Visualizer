const MAX_HEIGHT = 100;
const timers = [];
export const bubbleSortAnimate = (animations, speed, onFinish) => {
    if (animations === undefined) return;
    const dataBars = document.getElementsByClassName("data-bar");

    for (let i = 0; i < animations.length; i++) {
        const colorChange = i % 3 !== 1;
        if (colorChange) {
            const [barOneInx, barTwoInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = i % 3 === 0 ? "#1dc690" : "#278ab0";
            const timer = setTimeout(() => {
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
                if (i === animations.length - 1) {
                    animateOnFinish();
                    // onFinish();
                }
            }, i * speed);
            timers.push(timer);
        } else {
            if (!animations[i].length) continue;
            const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const timer = setTimeout(() => {
                barOneStyling.height = Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barTwoStyling.height = Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
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

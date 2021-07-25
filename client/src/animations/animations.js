export const bubbleSortAnimate = (animations, MS_ANIMATION_SPEED, MAX_HEIGHT, onFinish) => {
    if (animations === undefined) return;
    const dataBars = document.getElementsByClassName("data-bar");
    for (let i = 0; i < animations.length; i++) {
        const colorChange = i % 3 !== 1;
        if (colorChange) {
            const [barOneInx, barTwoInx] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            const color = i % 3 === 0 ? "#1dc690" : "#278ab0";
            setTimeout(() => {
                barOneStyling.backgroundColor = color;
                barTwoStyling.backgroundColor = color;
                if (i === animations.length - 1) {
                    onFinish();
                }
            }, i * MS_ANIMATION_SPEED);
        } else {
            if (!animations[i].length) continue;
            const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
            const barOneStyling = dataBars[barOneInx].style;
            const barTwoStyling = dataBars[barTwoInx].style;
            setTimeout(() => {
                barOneStyling.height = Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                barTwoStyling.height = Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                if (i === animations.length - 1) console.log("done");
            }, i * MS_ANIMATION_SPEED);
        }
    }
};

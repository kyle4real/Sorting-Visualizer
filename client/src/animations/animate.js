export const newAnimation = (array) => {
    return [
        {
            array: [...array],
            groupA: [],
            groupB: [],
            groupC: [],
            groupD: [],
            sortedIndicies: [],
        },
    ];
};

export const addToAnimation = (
    animation,
    array,
    sortedIndicies = [],
    groupA = [],
    groupB = [],
    groupC = [],
    groupD = []
) => {
    animation.push({
        array: [...array],
        groupA: [...groupA],
        groupB: [...groupB],
        groupC: [...groupC],
        groupD: [...groupD],
        sortedIndicies: [...sortedIndicies],
    });
};

export const lastSorted = (animation) => {
    return animation[animation.length - 1].sortedIndicies;
};

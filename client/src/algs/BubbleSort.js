import { addToAnimation, lastSorted, newAnimation } from "../animations/animate";

// SWAP HELPER
const swap = (arr, inx1, inx2) => {
    [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
};

const BubbleSort = (arr) => {
    const nums = [...arr];
    // setup for animating alg
    const animation = newAnimation(nums);

    // sorting alg with animation capture
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            // visual: comparing A[j] and A[j + 1]
            addToAnimation(animation, nums, lastSorted(animation), [j, j + 1]);
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                // visual: swap A[j] and A[j + 1]
                addToAnimation(animation, nums, lastSorted(animation), [], [j, j + 1]);
            }
        }

        // visual: final value is sorted
        addToAnimation(animation, nums, [...lastSorted(animation), nums.length - 1 - i]);
    }

    return animation;
};

export default BubbleSort;

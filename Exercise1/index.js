const nums = [2, 7, 11, 15];
const target = 9;

// ci sono modi più efficienti, per ora non è importante
const exerciseOne = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const output = exerciseOne(nums, target);
console.log(output);

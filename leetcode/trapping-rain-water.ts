/**
 * https://leetcode.com/problems/trapping-rain-water/
 */

var trap = function(height) {
  const leftWall = height.map(i => 0);
  const rightWall = height.map(i => 0);

  let currentLeftMax = 0;
  for (let i = 0; i < leftWall.length; i++) {
    currentLeftMax = Math.max(currentLeftMax, height[i]);
    leftWall[i] = currentLeftMax;
  }

  let currentRightMax = 0;
  for (let i = rightWall.length - 1; i >= 0; i--) {
    currentRightMax = Math.max(currentRightMax, height[i]);
    rightWall[i] = currentRightMax;
  }

  let water = 0;
  for (let i = 0; i < height.length - 1; i++) {
    water += Math.min(leftWall[i], rightWall[i]) - height[i];
  }

  return water;
};

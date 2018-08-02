const walls = (nums: number[]) => {
  const leftWall = nums.map(i => 0)
  const rightWall = nums.map(i => 0)

  let currentLeftMax = 0
  for(let i = 0; i < leftWall.length; i++) {
    currentLeftMax = Math.max(currentLeftMax, nums[i])
    leftWall[i] = currentLeftMax
  }

  let currentRightMax = 0
  for(let i = rightWall.length - 1; i >= 0; i--) {
    currentRightMax = Math.max(currentRightMax, nums[i])
    rightWall[i] = currentRightMax
  }

  let water = 0
  for(let i = 0; i < nums.length - 1; i++) {
    water += Math.min(leftWall[i], rightWall[i]) - nums[i]
  }
  return water
}

export default walls
// plants = [2,2,3,3], capacity = 5

function wateringPlants(plants: number[], capacity: number): number {
  var steps = 0;
  var nextPlant = 0;
  var can = capacity;
  const canStepForward = (): boolean => {
    return can >= plants[nextPlant];
  }
  const fillCan = () => {
    steps += nextPlant;
    can = capacity;
    steps += nextPlant;
  }
  const waterPlant = () => {
    steps++;
    can -= plants[nextPlant];
    nextPlant++;
  }
  while (nextPlant < plants.length) {
    if (canStepForward()) {
      waterPlant()
    } else {
      fillCan()
      waterPlant()
    }
  }
  return steps
};

export default wateringPlants;
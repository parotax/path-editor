let points = [];

const GetPoints = ({ obstacles }, { pointA }, { pointB }) => {
  points = [];
  points.push(pointA);
  points.push(pointB);
  for (let i = 0; i < obstacles.length; i++) {
    for (let j = 0; j < obstacles[i].length; j++) {
      points.push(obstacles[i][j]);
    }
  }
  return points;
};

export default GetPoints;

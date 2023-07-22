const w = 1584
const h = 396
const n = 200

let points = [];
let triangles = [];

function setup() { 
  // Create border points
  points.push([0, 0]);
  points.push([0, h]);
 
  for (let i = 0; i <= w/10; i++) {
    points.push([i*w/10, 0])
    points.push([i*w/10, h])
    
  }

  // Create random points
  for (let i = 0; i <= n; i++) {
    points.push([int(random(w)), int(random(h))]);
    
  }

  // Create canvas
  createCanvas(w+2, h+2);
  noStroke();
  colorMode(HSL, 360, 100, 100);
  
  triangles = Delaunay.triangulate(points);
  for (let i = 0; i < triangles.length; i += 3) {
    beginShape();
        fill(360-(i / triangles.length)*180, 100, 85);
    vertex(points[triangles[i]][0], points[triangles[i]][1]);
    vertex(points[triangles[i+1]][0], points[triangles[i+1]][1]);
	  vertex(points[triangles[i+2]][0], points[triangles[i+2]][1]);
    endShape(CLOSE);
  }
}

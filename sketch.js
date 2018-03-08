let nn, training_data, size, canvas_size, selected;

function setup() {
  size = 30;
  canvas_size = 600;
  selected = [-1, -1];
  createCanvas(canvas_size, canvas_size);
  noStroke();
  colorMode(HSB, size);
  nn = new NeuralNetwork(2, 2, 1, 0.1);
  training_data = generateTrainingData(size);
  console.log(training_data)
}

function generateTrainingData(number) {
  var data = [];
  for (var x = 0; x < number; x++) {
    for (var y = 0; y < number; y++) {
      object = {
        inputs: [x, y],
        outputs: [(x + y) / size / 2]
      }
      data.push(object);
    }
  }
  return data;
}

function draw() {
  background(255);
  displayInfo();
  for (var i = 0; i < 1000; i++) {
    train_object = random(training_data);
    nn.train(train_object.inputs, train_object.outputs);
  }

  let columns = width / size;
  let rows = height / size;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      output = 2 * size * nn.predict([i, j]);
      fill(map(output, 0, size * 2, 0, size), 50, 50);
      rect(i * columns, j * rows, columns, rows);
    }
  }
}

function displayInfo() {
  if (selected[0] != -1 && selected[1] != -1) {
    selected_output = 2 * size * nn.predict([selected[0], selected[1]]);
    var s = selected[0] + " + " + selected[1] + " =";
    document.getElementById("square").innerHTML = s;
    document.getElementById("output").innerHTML = selected_output;
  } else {
    document.getElementById("square").innerHTML = "No square selected!";
    document.getElementById("output").innerHTML = ".";
  }
}

function inbounds(x, y) {
  if (mouseX < canvas_size && 0 <= mouseX && 0 <= mouseY && mouseY < canvas_size) {
    return true;
  }
}

function mouseClicked() {
  if (inbounds(mouseX, mouseY)) {
    selected[0] = Math.floor(mouseX / (canvas_size / size));
    selected[1] = Math.floor(mouseY / (canvas_size / size));
  } else {
    selected = [-1, -1];
  }
}
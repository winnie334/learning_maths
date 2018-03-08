# learning_maths
A very basic neural network implementation to test some things out.

The canvas is a square grid consisting of squares. The network's goal is to calculate the sum of a square's row and column accurately. 
It will display its results using HSB, which hopefully results in a nice rainbow image.
![Like this!](https://imgur.com/EIl1xbr.png)

## How to use

There's a slider on top of the screen to adjust the learning speed. Higher speed = faster training = less updates per second = increased odds of computer exploding.

You can also click on a certain square to see its current results. Alternatively you can open the console and enter the command 
`2 * size * nn.predict([x, y])`
to see what the neural network thinks should be the result of the addition of x and y. Note that the network only knows additions up to `size`, a variable defined in sketch.js.

# learning_maths
A very basic neural network implementation to test some things out.

The canvas is a square grid consisting of squares. The network's goal is to calculate the sum of a square's row and column accurately. 
It will display its results using HSB, which hopefully results in a nice rainbow image.
![Like this!](https://imgur.com/EIl1xbr.png)

## How to use
Download/clone this repository and open *index.html*. It should work right away.

There's a slider on top of the screen to adjust the learning speed. Higher speed = faster training = less updates per second = increased odds of computer exploding.

You can also click on a certain square to see its current results. Alternatively you can open the console and enter the command 
`2 * size * nn.predict([x, y])`
to see what the neural network thinks should be the result of the addition of x and y. Note that the network only knows additions up to `size`, a variable defined in *sketch.js*.


## It doesn't work!

Whoa, big surprise. This is a quick implementation anyway. I'm open for pull requests, so go ahead. However, if the code runs but you don't get the rainbow, there might be some things you can do:
  * Decrease the `size` variable. This will result in a more pixel-y image, but is also easier for the computer to learn.
  * Simply reload the page. Sometimes the network has bad luck, and this causes it to get stuck.
  * Increase the training speed a bit. This won't have a noticeable effect other than making the network run faster, but perhaps results were simply not coming up fast enough.

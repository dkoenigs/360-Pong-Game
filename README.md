# 360-Pong-Game

_360° Pong is a game designed to be played by the visually impaired. Using spatial surround sound, the player must rotate their paddle to reflect the ball back. Made for Maze Day 2018, an expo showcasing games for children with visual impairments._
\
\
Instructions:
* Open the link found below using Google Chrome or Mozilla Firefox from a Desktop or Smartphone
* Use [<] and [>] to rotate the paddle (Desktop Browser) | Hold device flat, face up and rotate device around Y-axis (Smarphone Browser)
* Face the paddle into the oncoming ball to bounce it back and increment the score
* Speed of the ball increases as the score becomes higher
* Upon failing, the game will be paused. To resume, press [p] (Desktop Browser) | tap the screen (Smartphone Browser) 

Code:
* Layout of canvas is in HTML and CSS
* Game is written in TypeScript using Pixi JS creation engine
* Spatial sound is achieved using Howler JS 3rd party plugin
* Google Chrome and Mozilla Firefox smartphone API is used to handle smartphone events

Bugs/Future Improvements:
* As the speed of incoming balls increases, the sound is not calibrated to increase at the same frequency
* Smartphone orientation event is not correctly calibrated with the location of the spatial sound, giving incorrect audio guidance when used using a smarphone browser

http://apps.introcs.com/danielkoenig/comp80h-game/game.html 

<img src="https://github.com/dkoenigs/360-Pong-Game/blob/master/360DegreePong.png?raw=true" width="550" height="550" title="Conversion Calculator Screenshot">

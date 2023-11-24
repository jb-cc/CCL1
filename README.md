# Mutiny - CCL1

## Play the game here:
[https://ccl1.jonasbeer.com/](https://ccl1.jonasbeer.com/)

## Description

"Mutiny" is the game I created for the first "Creative Code Lab" - Two weeks, in which I used all of my knowledge I acquired over my first semester of the study program Creative Computing.

The goal was to create a 2D Browser Game using HTML, CSS and JavaScript, by utilizing the HTML Canvas.

## Story:
The former captain of a pirate ship was imprisoned as a result of mutiny, and the leader of the mutiny took his place as a captain.

The old captain (the player) desires to reclaim his ship, on which he is held captured. In order to do this, he plans to bribe the guards of the ships' prison cells, and then defeat the captain in combat.



## Gameplay:
The game is a 2D Platformer with a PvE combat system, where the player controls an imprisoned pirate. The objective of the game is to navigate the main character to the deck of the ship, while also collecting coins in the meantime. This is accomplished by completing a platformer style jump-and-run.

When the player nears the exit of the cell, he will either be told to get the guards more coins in order to bribe them, or will be let through to the outside and onto the ship's deck. Upon opening the cell door, the other pirates (including the captain) notice the player and start attacking, dealing one damage point.

The goal, and only way to win the game, is to defeat the captain before he or the crew can defeat the player.

# How I created this game:

## Battle Plan:

Before this study program, I had neither prior experience in coding, nor game design or graphic design. Therefore, I created what I call my "battle plan" for the Code lab, in order to structure my tasks and see what else I have to do. I also used it to show myself my progress and motivate me, as the task of creating a complete game with graphics all by myself was a bit intimidating.

For this, I used Microsoft Whiteboard, and just wrote everything related to the Code Lab down, as well as some progress screenshots from my art. I maintained this Whiteboard while working at home, where I did most of my graphics. The coding however, was something I almost exclusively did in our dedicated rooms in the UAS, as the atmosphere was great and there always was someone I could ask if needed.

This sense of community and just the general help from all the kind colleagues and tutors was a big factor in my success with the game, and I am very thankful for the return to on-site studying in general.

## Graphics:

All the graphics used in the game were made by me (Jonas Beer), using Aseprite.

A colleague recommended Aseprite to me for anything pixel art, so I decided to give it a shot. As I never did anything remotely related to pixel art before this study program, it was a completely new experience for me and I had to learn everything from scratch. As a result, I now have over 68 hours of using Aseprite on steam, and can say that I am quite proud of the graphics I managed to create.

I started by sketching the general look of my game, just to get a feel for it, and the step by step refining what I had. I used this technique for all of my sprites as well, and in the end had some really good-looking graphics (at least for my standard).

## Coding:

Even though creating graphics was no easy task, the main part of the Code Lab is - as the name suggests - the coding.

For this, I used the Framework we created in the 2D Browser Game Coding class with Lucas Schöffer.

While the main concept of this Framework is still the same, I expanded on it and changed it in order to function with my game idea.

This baseline of code, however, was only used for the jump-and-run part of my game. For that, I used the following main classes and concepts:

```GameObject```
```PlayerFigure```
```ImageObject```
```Obstacle```
```GameManager```
```Canvas```
```inputHandling```

my most important classes and what they do:

```Enemy``` (modified) --> For the fighting system I implemented a range check, so that in a range of 300 the enemys can detect the player and walk towards him with a randomized speed, and start attacking and damaging the player when in a smaller range of 25. I also added other necessities for the fighting system, which I will go in detail later on


```PlayerFigure``` (modified) --> implemented a range check so that the range for the player is a bit bigger than the one of the enemies, a health counter and general necessities for the fighting system, as well as a coin counter. The gravity was changed a bit so that the jump and run is possible, without being too easy (some say it's too hard now, but I say it's a skill issue)


```Ladder``` --> The ladders were the biggest challenge to me. I had to find a way to disable the normal movement while on a ladder, and giving it back when not on a ladder. In the end I solved it by creating a new class called Ladder, and a new class ```GravityBlock```. When the Player collides with the ladder, the gravity gets disables for the player, and he can now effectively float. I also changed how the "W" key in the ```InputHandling``` works, so that it is now dependent on if there is gravity or not. With the Gravity Block I then give the player his Gravity back, and then I just placed gravity Blocks on every entrance and exit of the ladders.
The whole fighting system, which I viewed as the biggest challenge from the beginning, is entirely new made and of that I am very proud.

I was not really sure if and how I was going to create an entire PvE fighting system, with hit animations, damage indicator and healthbars.

[Class Diagram of all my classes](documentationImages/classDiagram.png)



This is how I solved this challenge:

When outside a range of 300 "blocks" of the player, all the enemies move randomly and with random speeds, so they do not "notice" the player. However, when in the range of 300, the will now start walking to the player until they reach his x- position. When close enough, they will start playing a hit animation and the health counter of the player will be subtracted by 1. This close-range fighting system was also used for the player, just without the 300 block radius. This also gave me the possibility to change ranges of different classes of enemies, such as the captain. Every Enemy, as well as the player, also has a max health and a damage cooldown, so that they can only be damaged every 1.5 seconds.

Lastly, I added visualization for the player to see when one got damage. I did this by creating a dynamic health bar that floats above the corresponding figure, and a damage animation by setting the alpha-value of the damages figure to 0.5 for 10 frames. This creates a blinking effect, and together with the health bar the player can now see how much health every figure on the canvas has.


# Reflection
The Code Lab was great. It was a great mix of the different things we learned in the first semester, and having to apply them all was a very nice challenge. It was stressful, of course, but with the community we have in our course, as well as the tutors' help, it all went quite smooth, even better than what I expected.

While the objective of the code lab was to apply all the things I learned, these two weeks actually expanded my knowledge even further and created some new confidence. I really viewed this Code Lab as a big milestone for myself, as it would be my first real project I had to complete - and I was successful! :)

All the challenges I imagined (especially the fighting system - which is modular by the way, so you can technically make every object fight-able), as well as the ones I didn't expect (ladders) were solvable in the end, and the feeling of having created a game just by myself is nice, and motivates me for the future.



With all of that in mind, I need to thank some people who really helped me accomplish this first game. All the colleagues who helped me, especially David Kupert, Dejan Kovacevic and Marco Huber, who gave me inspiration for some important parts of the game, as well as showing me new approaches on how to solve certain problems. This project really showed me what a good community is worth, and sharing ideas, as well as helping other students, was really a great experience.

The setup at the FH was fantastic, and the fact that we had teachers and tutors there to give assistance was super helpful.



And now, have fun playing the game :)

[https://ccl1.jonasbeer.com/](https://ccl1.jonasbeer.com/)

(if you find any bugs, comment them and I will fix them)

(maybe)
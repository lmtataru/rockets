Exercise:
PHASE 1:

We want to make rocket racing software.

A rocket is identified by an 8-character code and a number of thrusters.

Perform the following steps: (Try to follow the MVC scheme, separating in different directories what is the view of the model and the controller). The code must be ready to accept 2 rockets or 99999999 rockets (must be scalable using generic functions)

1. We create two rockets with the codes “32WESSDS” and “LDSFJA32”. The first rocket will have three thrusters and the second six thrusters.

2. Display the rocket code and the number of thrusters it has on the screen.

PHASE 2:

We want to improve the software so that the engine has maximum power.

We modify in the previous main:

1. We create two rockets with the codes “32WESSDS” and “LDSFJA32”. The first rocket will have three thrusters (maximum power: 10,30,80) and the second six thrusters (maximum power: 30,40,50,50,30,10).

2. Display the rocket code, the number of thrusters it has and the maximum power of each thruster.

Output:

32WESSDS: 10,30,80

LDSFJA32: 30,40,50,50,30,10

PHASE 3:

All thrusters will have a current power that will start with 0.

The rocket will have two methods, accelerating or braking and will increase or decrease by 10 by 10 the power of the propellant. The rocket will have a current power that is the sum of all the powers of its propellants.

Rocket example with powers of 10,30,80. When creating the rocket the current power will be 0. 

Increase 1st Hit: 10 + 10 + 10 = 30 current power 

Increase 2nd Hit: 0 + 10 + 10 = 30 + 20 current power 

Increase 3rd Hit: 0 + 10 + 10 = 50+ 20 current power 

Increase 4th Hit: 0 + 0 + 10 = 70 + 10 current power

Increase 5th Hit: 0 + 0 + 10 = 80 + 10 current power .... up to the maximum power which will be 120

We modified in the previous main:

1. We create two rockets with the codes “32WESSDS” and “LDSFJA32”. The first rocket will have three thrusters (power: 10,30,80) and the second six thrusters (power: 30,40,50,50,30,10).

2. Display the rocket code, the number of thrusters it has and the maximum power of each thruster.

3. Show on the screen the current power of the rockets

4. Accelerate with rockets three times

5. Show the current power on the screen

6. Brake five times with the first rocket (“32WESSDS”) and accelerate seven with the second rocket.

7. Display the current power on the screen

8. Accelerate 15 times with both rockets.

9. Show the current power on the screen

PHASE 4:

Add buttons to view to allow a user to create, accelerate, brake, and view rocket information. 

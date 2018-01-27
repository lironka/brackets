# Brackets Task
## Issue
At the input there is a line containing only brackets from the set {}()[]. 
It is necessary to determine whether it is balanced or not.

A balanced line is a string in which three conditions are fulfilled:

* for each opening bracket there is a corresponding closing;
* the corresponding closing bracket must be after the opening bracket;
* between the two corresponding brackets there are no other brackets without the correspondences between these brackets.

That is, [([]{[]})] is balanced, but {[}], [{)] and ]{}[ - are not.

## Installation instructions
Be sure to have installed [Node.js](http://nodejs.org/) in your system and [Mocha](https://mochajs.org/#installation) and [Should](https://www.npmjs.com/package/should) for testing.

## Run tests
In terminal in the folder:
```bash
NODE_ENV=test mocha
```

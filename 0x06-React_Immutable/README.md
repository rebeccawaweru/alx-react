Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Immutable objects. Who, what, when, where, and why?
How to use the Immutable.js library to bring immutability to Javascript
The differences between List and Map
How to use Merge, Concat, and Deep Merging
What a lazy Seq is
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
A README.md file, at the root of the folder of the project, is mandatory
All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
All of your files should end with a new line
All of your functions must be exported
Setup
Install NodeJS 12.11.x
Install npm 6.11.x
The script below installs the above 2 at the specified versions

$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs

An immutable object - an object whose state cannot be modified after it has been created.
Enables:
- No defensive copying
- Advanced memoization and change detection techniques with simple logic.

Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.

fromJS - Deeply converts plain JS objects and arrays to Immutable Maps and Lists.
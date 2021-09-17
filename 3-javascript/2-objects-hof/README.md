### MongoDB Basic Example

#### Install on Mac OS

Terminal: 
* brew tap mongodb/brew
* brew install mongodb-community

At this point, if you see an error that says "CompilerSelectionError: gcc cannot be built with any available compilers", you will need to install the code command lines with the command:

* xcode-select --install
Afterward, run the brew install command above once again.
Next, enter:
* brew link mongodb-community

Confirm installation:

* mongod -version

Create folder called data in a mongodb folder to create a custom data path and start MongoDB Server (do not stop service)

* mongod --dbpath=data

note: open another terminal if needed.


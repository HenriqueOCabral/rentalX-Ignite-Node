# rentalX-Ignite-Node

Second Chapter of Ignite-Trilha-NodeJs: Getting to know more about S.O.L.I.D. !
Study project by Ignite Bootcamp from Rocketseat - Classes were done by: <a href="https://github.com/danileao">Daniele Leao</a>

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v^X.XX.X

    $ npm --version
    X.X.X

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn dev

## Cars:

### Register A New Car -
* User should be able to register a new Car.
* User should be able to list all Categories.
* User should not be able to register two or more cars with the same license_plate.
* User should not be able to change an already registered license_plate.
* The new registered Car should have available set to be true by default.
* Only Users with Admin privilege should be able to register a new Car.

### List All Cars -
* User should be able to list all available Cars.
* User should be able to list all available Cars by Categories.
* User should be able to list all available Cars by the Brand Name.
* User should be able to list all available Cars by the Car Name.
* Every User - Logged or not - should be able to gain access to the list.

### Create A Car Specification -
* User should be able to create a new Specification.
* User should be able to list all Specifications.
* User should be able to list all Specifications that a Car has.
* User should not be able to create a Specification to an nonexistent Car.
* User should not be able to create an already existent Specification in a Car.
* Only Users with Admin privilege should be able to register a new Specification.

### Upload Car Images - 
* User should be able to upload one or more images for the same Car.
* Only Users with Admin privilege should be able to upload Car images.
* Admin User should be able to list all Cars.

### Rentals -
* User should be able to register a new Rent.
* The minimum timestamp for a Rent is 24 hours.
* User should not be able to register simultaneous Rents.
* Cars should not be able to register simultaneous Rents.
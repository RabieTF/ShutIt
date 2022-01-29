Shut It is a small project that allows me to shut down my computer from my phone (there are probably other tools for that but I wanted it to be mine).

It uses Node.js ran as a Windows service (hence the serviceSetup.js in the shutit-pc), it uses as a medium a real time database (powered by Firebase).

On the user end, it runs a React Native application made for the purpose.

## Installation

(Uses Node.js 14.15.0)

```shell
$ git clone https://github.com/RabieTF/ShutIt.git
```

First clone this repository on your machine.

## Mobile installation

```shell
$ cd ./shutit-mobile
$ npm install
```

Create a .env file containing your Firebase configuration information according to the names used in ./base.js.

Build the app using the following commands:

```shell
npm install expo-cli -g
```

if you're using android on the target mobile:
```shell
$ expo build:android -t apk
```
if you're using IOS on the target mobile:
```shell
$ expo build:ios -t (archive or simulator) 
```

Use `simulator` if the target platform is an IOS simulator.

The app needs to be installed on the target mobile platform and used following the UI.

## PC Installation

```shell
$ cd ./shutit-pc
$ npm install
```

Create a .env file containing your Firebase configuration and your Login information (Created in Firebase Auth) as well as the absolute address of the index.js file, according to the variable names used in ./index.js and ./serviceSetup.js.

Execute the following command:

```shell
$ node ./serviceSetup.js
```

## Side notes

This project serves as training for my Node.js and React Native skills, do not hesitate to open an issue or make a pull request to add or remove or correct whatever you please to.

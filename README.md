# Meteor NPM tutorial

## Running the example

clone the repo, `cd` to it and run `meteor`.

In terminal you'll see something similar to:

```shell
=> Started proxy.
=> Meteor 0.8.1.3 is available. Update this project with 'meteor update'.
=> Started MongoDB.
npm: updating npm dependencies -- underscore...
I20140610-13:10:14.318(2)? _.VERSION 1.6.0
=> Started your app.

=> App running at: http://localhost:3000/
```

If you see the `_.VERSION` line it's working.

## DIY

Copied largely from http://meteorhacks.com/complete-npm-integration-for-meteor.html

### installation

```shell
npm install -g meteor-npm #single time operation
meteor-npm #type inside your project
```

### packages.json

Create a `packages.json` file on your project root.

> Note that it is packages.json, not package.json

Now define the npm packages you want, with the absolute package versions as shown below.

```json
{
  "underscore": "1.6.0"
}
```

### require npm modules

```js
//server
var _ = Meteor.require('underscore');
console.log('_.VERSION', _.VERSION);
```

will output:

```shell
I20140610-13:10:14.318(2)? _.VERSION 1.6.0
```
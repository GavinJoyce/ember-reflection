# ember-reflection

[![Build Status](https://travis-ci.org/GavinJoyce/ember-reflection.svg?branch=master)](https://travis-ci.org/GavinJoyce/ember-reflection)

Returns an array of defined properties for an Ember object

Questions? Ping me [@gavinjoyce](https://twitter.com/gavinjoyce)

## Installation

This is an Ember CLI addon, to install:

`npm install ember-reflection --save`

## Usage Instructions

```javascript
import Em from 'ember';
import getDefinedProperties from 'ember-reflection/get-defined-properties';

var Cat = Em.Object.extend({
  name: null,
  age: null,
  isOld: Em.computed.gt('age', 10)
});

var sully = Cat.create({
  name: 'Sully',
  age: 4
});

getDefinedProperties(sully); //=> ['name', 'age', 'isOld']
```

## Development Instructions

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

import Em from 'ember';
import getDefinedProperties from 'ember-reflection/get-defined-properties';

module('getProperties');

test('an empty object has no properties', function() {
  var cat = Em.Object.create();

  equal(getDefinedProperties(cat).length, 0);
});

test('an object with one literal property', function() {
  var cat = Em.Object.create({
    name: 'Sully'
  });

  deepEqual(getDefinedProperties(cat), ['name']);
});

test('an object with a computed property', function() {
  var cat = Em.Object.create({
    name: 'Sully',
    nickname: Em.computed.alias('name')
  });

  deepEqual(getDefinedProperties(cat), ['name', 'nickname']);
});

test('an object with a class hierarchy', function() {
  var Animal = Em.Object.extend({
    a: 'animal',
    b: function() {
      return this.get('a').length;
    }.property('a'),
    x: function() { return 1; }
  });

  var Cat = Animal.extend({
    a: 'cat',
    c: function() {
      return this.get('a').length;
    }.property('a'),
    y: function() { return 2; }
  });

  var cat = Cat.create({
    d: 'Sully',
    e: Em.computed.alias('d'),
    z: function() { return 3; }
  });

  deepEqual(getDefinedProperties(cat), ['d', 'e', 'a', 'c', 'b']);
});

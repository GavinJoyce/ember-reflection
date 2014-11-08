import Em from 'ember';

var inheritedProperties = ['constructor', 'concatenatedProperties', 'isDestroyed', 'isDestroying'];

export default function(object) {
  var properties = [];
  for(var key in object) {
    if(Em.typeOf(object.get(key)) === 'function') {
      continue;
    }

    if(key.indexOf('__') === 0) {
      continue;
    }

    if(inheritedProperties.contains(key)) {
      continue;
    }

    properties.push(key);
  }

  return properties;
}

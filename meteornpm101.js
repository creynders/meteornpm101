
if (Meteor.isClient) {
    
  Template.hello.greeting = function () {
    return "Hello World!";
  };

}

if (Meteor.isServer) {
    var _ = Meteor.require('underscore');
    console.log('_.VERSION', _.VERSION);
}

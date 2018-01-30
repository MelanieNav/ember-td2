import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const Note = EMberObject.extend({

});

export default Route.extend({
  model(){
    return Note.create({MAX:100});
  }
});

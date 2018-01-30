import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';
import {equal} from '@ember/object/computed';

const Note = EmberObject.extend({
  size:computed('content',function(){
    let content=this.get('content');
    let MAX=this.get('MAX');
    return MAX-content.length;
  }),
  style:computed('size',function(){
    let size=this.get('size');
    let style='alert-info';
    if(size<50)
      style='alert-warning';
    if(size<20)
      style='alert-danger';
    return style;
  })

});

export default Route.extend({
  model() {
    return Note.create({
      MAX: 100,
      content: 'Entrez votre texte'
    });
  },
    actions:{
      save:function(){

    },
    clear:function(){
        let model=this.modelFor(this.routeName);
        model.set('content','');
    }
    }
  });

import Ember from 'ember';

export default Ember.Route.extend({
  rentalModel() {
    return this.store.findAll('rental');
  },  
  announcementModel() {
    return this.store.findAll('announcement');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});

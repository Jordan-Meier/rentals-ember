import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if (confirm('You sure you want to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementShowForm() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params2 = {
        date: this.get('date') ? this.get('date'): "",
        message: this.get('message') ? this.get('message'): ""
      };
      this.set("addNewAnnouncement", false),
      this.sendAction('saveAnnouncement', params2);
    }
  }
});

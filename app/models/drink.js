import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    thumb: DS.attr('string'),
    attributes: function () {
        return this.store.findRecord('drink-attribute', this.get('id'));
    }.property('id')
});

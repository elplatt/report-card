EntityModel = Backbone.Model.extend({});
EntityCollection = Backbone.Collection.extend({
    model: EntityModel
});

EntityView = Backbone.View.extend({
    template: _.template($('#tpl-entity-view').html()),
    initialize: function (options) {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

EntityListView = Backbone.View.extend({
    initialize: function (options) {
        var that = this;
        this.collection.each(function (model) {
            var view = new EntityView({model:model});
            that.$el.append(view.el);
        });
    }
});


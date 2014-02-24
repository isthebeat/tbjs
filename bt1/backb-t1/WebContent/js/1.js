(function($){



  var ListView = Backbone.View.extend({
    el: $('body'), // attaches `this.el` to an existing element.

    // initialize 2

    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       this.render(); // not all views are self-rendering. This one is.
    },

    // render 6
    
    render: function(){
      $(this.el).append("<ul> <li>hello world</li> </ul>");
    }
  });


  var listView = new ListView();

})(jQuery);

(function() {
  "use strict";

  Neo.Classes.DialogTest = Neo.Classes.TestView.extend({
    init: function(config) {
      Neo.Classes.TestView.call(this, config);
    },

    buildComponent: function() {
      window.dialog = Neo.createComponent({
        name: "Dialog",
        title: "What is Lorem Ipsum?",
        body: {
          name: "Layout",
          items: [{
            component: {
              name: "Label",
              text: "Lorem Ipsum is simply dummy text of the printing and \
typesetting industry. Lorem Ipsum has been the industry's standard dummy text \
ever since the 1500s, when an unknown printer took a galley of type and \
scrambled it to make a type specimen book. It has survived not only five \
centuries, but also the leap into electronic typesetting, remaining essentially\
 unchanged. It was popularised in the 1960s with the release of Letraset sheets\
 containing Lorem Ipsum passages, and more recently with desktop publishing \
 software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          }]
        },
        onClose: function() {
          console.log('close requested');
          // return false to prevent dialog close
        }
      });

      setTimeout(function() {
        dialog.open();
      }, 500);
    },

    tests: function(Dialog) {
      describe("Dialog", function() {
        // Write test cases here
      });
    }
  });
}());
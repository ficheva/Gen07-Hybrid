'use strict';

app.formView1 = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var formView1Model = kendo.observable({
        fields: {
            username: '',
            url: '',
            switch1: '',
            switch: '',
            time: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formView1Model', formView1Model);
})(app.formView1);
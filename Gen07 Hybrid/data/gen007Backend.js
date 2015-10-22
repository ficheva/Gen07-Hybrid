'use strict';

(function() {
    app.data.gen007Backend = new Everlive({
        offlineStorage: true,
        apiKey: 'WQB7ktb966syTiZ3',
        url: '//testtap.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.gen007Backend.offline(false);
        app.data.gen007Backend.sync();
    });

    document.addEventListener("offline", function() {
        app.data.gen007Backend.offline(true);
    });

}());
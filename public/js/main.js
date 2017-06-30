$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
    if(data.stream !== null){
        var game = data.stream.game;
        var info = data.stream.channel.status;
        $("#freecodecamp").text(game + ": " + info);
    }
    
});

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?', function(data) {
    if(data.stream !== null){
        var game = data.stream.game;
        var info = data.stream.channel.status;
        $("#OgamingSC2").text(game + ": " + info);
    }
});

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/cretetion?callback=?', function(data) {
    if(data.stream !== null){
        var game = data.stream.game;
        var info = data.stream.channel.status;
        $("#cretetion").text(game + ": " + info);
    }
});

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/brunofin?callback=?', function(data) {
    if(data.stream !== null){
        var game = data.stream.game;
        var info = data.stream.channel.status;
        $("#brunofin").text(game + ": " + info);
    } 
});



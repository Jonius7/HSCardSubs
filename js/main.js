



var raritytable = [
    {name: "Free", color: "#3c3c3c"},
    {name: "Common", color: "#f6f6f6"},
    {name: "Rare", color: "#2570e5"},
    {name: "Epic", color: "#8f2aac"},
    {name: "Legendary", color: "#d08d0b"}
]


var seticons = [
    {name: "Basic", code: "BASIC", color: "#CECECE"},
    {name: "Classic", code: "CLAS", color: "#9E562C"},
    {name: "Hall of Fame", code: "HOF", color: "#9E562C"},
    {name: "Naxx", code: "NAXX", color: "#9E562C"},
    {name: "GvG", code: "GVG", color: "#9E562C"},
    {name: "Blackrock", code: "BRM", color: "#9E562C"},
    {name: "TGT", code: "TGT", color: "#9E562C"},
    {name: "LoE", code: "LOE", color: "#9E562C"},
    {name: "Whispers of the Old Gods", code: "WOG", color: "#CE6190"},
    {name: "One Night in Karazhan", code: "KARA", color: "#c325ce"},
    {name: "Mean Streets of Gadgetzan", code: "MSG", color: "#526057"},
    {name: "Journey to Un'Goro", code: "UNG", color: "#A3D54F"},
    {name: "Knights of the Frozen Throne", code: "KFT", color: "#49c1ce"},
    {name: "Kobolds & Catacombs", code: "KNC", color: "#ffb600"},
    {name: "The Witchwood", code: "TWW", color: "#ffb600"}
]


$(document).ready(function(){
    api_request();
    function api_request() {
        /*


        // returns a Javascript Object (converted from JSON object)
        var obj;
        $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + name, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            //data: {}, // Additional parameters here
            datatype: 'json',
            success: function(data) {
                //obj = JSON.stringify(data);
                console.log(data);
                retrieve_card(data);
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gLuJijYjismshLeMgpAkk4Vp3dUOp1vNL1djsnQVPYIKHuFOJV"); // Enter here your Mashape key
            }
        });

        */

        $.ajax({
            url: 'https://api.hearthstonejson.com/v1/latest/enUS/cards.json', 
            //type: 'GET', // The HTTP Method
            //data: {}, // Additional parameters here
            //datatype: 'json',
            success: function(data) {
                //obj = JSON.stringify(data);
                console.log(data);
                console.log(data[0]);
                //alert(data[1]);
            },
            //error: function(err) { alert(err); },
            /*
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin", "*"); // Enter here your Mashape key
            }*/
        });

        /*
        $.getJSON("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json", function(obj) {
            console.log(obj.details.ProductID);
        });
        */
    }

});
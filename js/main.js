
var raritytable = [
    {name: "Free", color: "#3c3c3c"},
    {name: "Common", color: "#f6f6f6"},
    {name: "Rare", color: "#2570e5"},
    {name: "Epic", color: "#8f2aac"},
    {name: "Legendary", color: "#d08d0b"}
]


var seticons = [
    {name: "Basic", code: "CORE", abbr: "BASIC", color: "#CECECE"},
    {name: "Classic", code: "EXPERT1", abbr: "CLAS", color: "#9E562C"},
    {name: "Hall of Fame", code: "HOF", abbr: "HOF", color: "#e68a00"},
    {name: "Curse of Naxrammas", code: "NAXX", abbr: "NAXX", color: "#1C702D"},
    {name: "Goblins vs Gnomes", code: "GVG", abbr: "GVG", color: "#9E7410"},
    {name: "Blackrock Mountain", code: "BRM", abbr: "BRM", color: "#F56A07"},
    {name: "The Grand Tournament", code: "TGT", abbr: "TGT", color: "#CFB6E3"},
    {name: "League of Explorers", code: "LOE", abbr: "LOE", color: "#F5CF5F"},
    {name: "Whispers of the Old Gods", code: "OG", abbr: "WOG", color: "#CE6190"},
    {name: "One Night in Karazhan", code: "KARA", abbr: "KARA", color: "#c325ce"},
    {name: "Mean Streets of Gadgetzan", code: "GANGS", abbr: "MSG", color: "#526057"},
    {name: "Journey to Un'Goro", code: "UNGORO", abbr: "UNG", color: "#A3D54F"},
    {name: "Knights of the Frozen Throne", code: "ICECROWN", abbr: "KFT", color: "#49c1ce"},
    {name: "Kobolds & Catacombs", code: "LOOTAPALOOZA", abbr: "KNC", color: "#ffb600"},
    {name: "The Witchwood", code: "GILNEAS", abbr: "TWW", color: "#ffb600"}
]


$(document).ready(function(){
});

var obj;
var cards = [];
api_request();

function api_request() {        
    // returns a Javascript Object (converted from JSON object)

    /*
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
        url: 'https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json', 
        success: function(data) {
            console.log(data);
            parse_data(data);
        }
    });
}

function parse_data(data) {
    obj = data;
    console.log(obj[1613]);
    console.log(obj.length);
    for (var c in obj) {
        cards.push(c);
    }
}
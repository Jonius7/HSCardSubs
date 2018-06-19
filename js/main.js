
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
    {name: "Goblins vs Gnomes", code: "GVG", abbr: "GVG", color: "#c79818"},
    {name: "Blackrock Mountain", code: "BRM", abbr: "BRM", color: "##f52b07"},
    {name: "The Grand Tournament", code: "TGT", abbr: "TGT", color: "#CFB6E3"},
    {name: "League of Explorers", code: "LOE", abbr: "LOE", color: "#F5CF5F"},
    {name: "Whispers of the Old Gods", code: "OG", abbr: "WOG", color: "#CE6190"},
    {name: "One Night in Karazhan", code: "KARA", abbr: "KARA", color: "#C325CE"},
    {name: "Mean Streets of Gadgetzan", code: "GANGS", abbr: "MSG", color: "#526057"},
    {name: "Journey to Un'Goro", code: "UNGORO", abbr: "UNG", color: "#A3D54F"},
    {name: "Knights of the Frozen Throne", code: "ICECROWN", abbr: "KFT", color: "#07DEFA"},
    {name: "Kobolds & Catacombs", code: "LOOTAPALOOZA", abbr: "KNC", color: "#FFB600"},
    {name: "The Witchwood", code: "GILNEAS", abbr: "TWW", color: "#8BF7A4"}
]

$(document).ready(function(){
    $("#card-name-input").keyup(function(event) {
        if (event.keyCode === 13) {
            var cardname = $("#card-name-input").val();
            //$("#cardtitle").html(cardname);
            try {
                //console.log(cardname);
                var cardobject = find_card(cardname);
                console.log(cardobject);
                $("#carddesc").html(cardobject.text);
            } catch(err) {
                console.log("Invalid Name: " + err);
            }
        }
    });
    /*
    $("h3:contains('Staples')" ).css("text-decoration", "underline");
    $("h3:contains('Deck Staples')" ).css("text-decoration", "underline");
    $("h3:contains('Good')" ).css("text-decoration", "underline");
    */
});




var obj;
var cards = [];
api_request();

function api_request() {        
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
            
            get_image_tooltip();
        }
    });
}

function parse_data(data) {
    obj = data;
    console.log(obj[1613]);
    console.log(obj.length);
    for (i=0; i<obj.length; i++) {
        cards.push(obj[i]);
    }
}

function find_card(name) {
    for (var c = 0; c < cards.length; c++) {
        if(cards[c].name == name) {
            return cards[c];
            break;
        }
    }
    //throw '"' + name + '"' + " is not a valid card.";
}

function get_image_tooltip () {
    $(".carditem").each(function(name) {
        var this_card = $(this).text();
        this_card_obj = find_card(this_card);        
        $(this).html(
            '<span class="cardtile" style="background-image: url(https://art.hearthstonejson.com/v1/tiles/'+ this_card_obj.id + '.png);"></span>' 
            + '<a class="tooltip2 ' + this_card_obj.rarity.toLowerCase() + '">' + this_card 
            + '<span><img class="callout img-responsive" src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/'+ this_card_obj.id + '.png"></img></span>' 
            + '</a>');
    });
}

druid_staples = ["Druid of the Swarm", "Power of the Wild", "Crypt Lord", ""];
"<tr><td></td></tr>"
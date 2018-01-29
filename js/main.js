$(document).ready(function(){
    //$("#showwild").hide();
    $("#link1").click(function(){
        if ( $("#showwild").is(":hidden") ) {
            $("#showwild").slideDown(400);
        } else {
            $("#showwild").slideUp(400);
        }
        //$("#showwild").slideDown(400);
    });

    var similar = [
        {
            name: "Arcanologist",
            cardSet: "Journey to Un'goro",
            rarity: "Common",
            cost: 2, attack: 2, health: 3,
            text: "<b>Battlecry:</b> Draw a <b>Secret</b> from your deck.",
            playerClass: "Mage",
            img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/UNG_020.png"
        },
        {
            name: "Amani Berserker",
            cardSet: "Classic",
            rarity: "Common",
            cost: 2, attack: 2, health: 3,
            text: "<b>Enrage:</b> +3 Attack",
            playerClass: "Neutral",
            img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_393.png"
        }
    ]
    
    $("#link1").click(function() {
        create_icons();
        $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + "Amani Berserker", // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            //data: {}, // Additional parameters here
            datatype: 'json',
            success: function(data) {
                $("#output").html(JSON.stringify(data));
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gLuJijYjismshLeMgpAkk4Vp3dUOp1vNL1djsnQVPYIKHuFOJV"); // Enter here your Mashape key
            }
        });
    });

    var raritytable = [
        {
            name: "Free", color: "#cecece"
        },
        {
            name: "Common", color: "#e59902"
        },
        {
            name: "Rare", color: "#ef40a3"
        },
        {
            name: "Epic", color: "#c325ce"
        },
        {
            name: "Legendary", color: "#707070"
        }
    ]

    
    var seticons = [
        {
            name: "Basic", code: "BASIC", color: "#cecece"
        },
        {
            name: "Classic", code: "CLAS", color: "#e59902"
        },
        {
            name: "Whispers of the Old Gods", code: "WOG", color: "#ef40a3"
        },
        {
            name: "One Night in Karazhan", code: "KARA", color: "#c325ce"
        },
        {
            name: "Mean Streets of Gadgetzan", code: "MSG", color: "#707070"
        },
        {
            name: "Journey to Un'Goro", code: "UNG", color: "#63c645"
        },
        {
            name: "Knights of the Frozen Throne", code: "KFT", color: "#3c82c4"
        },
        {
            name: "Kobolds & Catacombs", code: "KNC", color: "#ffb600"
        }
    ]

    function create_icons() {
        var obj = $.grep(seticons, function(e){return e.name == "Classic";});
        //alert(obj[0].code);
        $(testicons)
        .html('<div id="seticon">'+ obj[0].code + '</div>')
        .css({
            'background-color': obj[0].color,
            'border': '1px solid black',
            'width': '60px',
            'height': '30px',
            'font': 'Helvetica, Arial, sans-serif'
        })
    }
    
    function river_crocolisk() {
        
    }

});


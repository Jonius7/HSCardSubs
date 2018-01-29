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
        $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/beckoner%20of%20evil', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'POST', // The HTTP Method
            data: {}, // Additional parameters here
            datatype: 'json',
            success: function(data) { alert(JSON.stringify(data)); },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gLuJijYjismshLeMgpAkk4Vp3dUOp1vNL1djsnQVPYIKHuFOJV"); // Enter here your Mashape key
            }
        });
    });
    
    function rivercrocolisk($) {
    
    }

});


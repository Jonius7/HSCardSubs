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
    }
]


function rivercrocolisk($) {

}
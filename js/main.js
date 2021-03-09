$(document).ready(function() {
    dropMenu(".tarif_menu", ".drop_tarif_menu");
    dropMenu(".conti_menu", ".drop_conti_menu");
    dropMenu(".prodotti_menu", ".drop_prodotti_menu");
    dropMenu(".azienda_menu", ".drop_azienda_menu");
    dropMenu(".aiuto_menu", ".drop_aiuto_menu");
    

})

function dropMenu(pM, dM){
    $(pM).mouseenter(function() {
        $(dM).css("display","block")     
    })
    $(pM).mouseleave(function() {
        $(dM).css("display","none")     
    })
}
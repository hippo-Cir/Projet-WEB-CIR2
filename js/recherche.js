'use strict';

ajaxRequest('GET', '../php/api/v1/api.php/isen', affiche_isen);

//fonction qui permet d'affiche les site isen dans le select de la page html
function affiche_isen(poll){
    for(let isen of poll){
    $('#depart').append('<option value="'+isen.site_isen+'"> '+isen.site_isen+' </option>' );
    }
}
//event 
$('#boutton').click((event) =>
{
console.log(event);
        event.preventDefault();
        if($('#Partir').is(':checked'))
            ajaxRequest('GET', '/php/api/v1/api.php/trajets?destination='+$('#adr').val()+'%&isen_depart=%'+$('#depart').val()+'%', info);//aller
        else
            ajaxRequest('GET', '/php/api/v1/api.php/trajets?depart='+$('#adr').val()+'%&isen_destinataire=%'+$('#depart').val()+'%', info);//partir
  }
);

//affichage des données de la base de donnée  

function info(vaar){
    $('#resultat').html('')
    for(let vaars of vaar){
        $('#resultat').append('<div style="text-align: center" ><p>Pseudo: '+vaars.pseudo+ '</p></div><br>')//affichage du pseudo 
        $('#resultat').append('<div style="text-align: center" ><p> Adresse: '+vaars.adresse+'</p></div><br>')//affichage de l'adresse
        $('#resultat').append('<div style="text-align: center" ><p>Commune: '+vaars.commune+'</p></div><br>')//affichage de la commune
        $('#resultat').append('<div style="text-align: center" ><p> Code Postal: '+vaars.code_postal+'</p></div><br>')//affichage du code postal
        $('#resultat').append('<div style="text-align: center" ><p> ISEN: '+vaars.site_isen+'</p></div><br>')//affichage du site ISEN
        $('#resultat').append('<div style="text-align: center" ><p> Date et heure de départ: '+vaars.date_heure_depart+'</p></div><br>')// affichage de l'heure de départ
        $('#resultat').append('<div style="text-align: center" ><p> Date et heure d arrivée: '+vaars.date_heure_arrivee+'</p></div><br>')// affichage de l'heure d'arrivée
        $('#resultat').append('<div style="text-align: center" ><p> Nombre de place:'+vaars.nb_places_max+'</p></div><br>')//affichage du nombre de place
        $('#resultat').append('<div style="text-align: center" ><p> Prix : '+vaars.prix+'€</p></div><br>')//affichage du prix
        $('#resultat').append('<div style="text-align: center" ><input type=submit value=reserver id='+vaars.id_trajet+'></input></div>')// boutton reserver 
    }   
}

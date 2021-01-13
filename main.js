$(document).ready(function () {
  var SubscribRange = 0;
  function _addNewSbsciber() {
    SubscribRange++;
    var subscription =
      '<div class="subscriberBox"> <form action="#"> <h5>Information ' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      '</sup> Assuré</sup></h5> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <select name="civilité" id="civité" class="form-control"> <option value="">civilité du client</option> <option value="">Mrs</option> <option value="">Mme</option> <option value="">Mlle</option> </select> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <input type="text" id="nom" placeholder="Nom du client" name="nom" class="form-control"> </div> <div class="form-group col-6 float-right"> <input type="text" id="prenom" placeholder="Prénom du client" name="prenom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <select name="civilité" id="civité" class="form-control"> <option value="">Situation</option> <option value="">Résident Français</option> <option value="">Résident UE</option> <option value="">Résident Hors UE</option> </select> </div> <div class="form-group col-6 float-right"> <input type="text" id="dob" placeholder="Date de naissance" name="dob" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <input type="date" id="dob" placeholder="Date de naissance" name="dob" class="form-control"> </div> <div class="form-group col-6 float-left"> <input type="text" id="pob" placeholder="Lieu de naissance" name="pob" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <select name="nationalite" id="nationalite" class="form-control"> <option value="">Nationalité</option> <option value="">Résident Français</option> <option value="">Résident UE</option> <option value="">Résident Hors UE</option> </select> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <input type="text" id="profession" placeholder="Profession" name="profession" class="form-control"> </div> <div class="form-group col-6 float-right"> <input type="text" id="secteur" placeholder="Secteur d\'activité" name="secteur" class="form-control"> </div> </div> </div> </form> <form action="#"> <h5>Coordonnées ' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      '</sup> Assuré</sup></h5> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <select name="civilité" id="civité" class="form-control"> <option value="">Pays</option> <option value="">Mrs</option> <option value="">Mme</option> <option value="">Mlle</option> </select> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <input type="text" id="nom" placeholder="Adresse 1 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <input type="text" id="nom" placeholder="Adresse 2 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <input type="text" id="nom" placeholder="Adresse 3 du client" name="nom" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-3 float-left"> <input type="text" id="cp" placeholder="CP" name="cp" class="form-control"> </div> <div class="form-group col-7 float-left"> <input type="text" id="ville" placeholder="Ville" name="ville" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-6 float-left"> <input type="text" id="telephone" placeholder="Télephone" name="telephone" class="form-control"> </div> <div class="form-group col-6 float-right"> <input type="text" id="portable" placeholder="telephone Mobile" name="portable" class="form-control"> </div> </div> </div> <div class="row"> <div class="col-12 row d-inline"> <div class="form-group col-12 float-left"> <input type="email" id="mail" placeholder="Mail" name="mail" class="form-control"> </div> </div> </form> </div>';
    var choiceElt =
      '<div class="form-check"> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"> <label class="form-check-label" for="flexRadioDefault1">' +
      SubscribRange +
      "<sup>" +
      _getRange(SubscribRange) +
      "</sup> Assuré </label> </div>";

    $("#subscribersBox").append(subscription);
    $("#choice").append(choiceElt);

    console.log(SubscribRange);
  }
  $("#newSbcripter").click(function () {
    _addNewSbsciber();
  });
  function _getRange(number) {
    return number === 1 ? "er" : "éme";
  }

  _addNewSbsciber();
});

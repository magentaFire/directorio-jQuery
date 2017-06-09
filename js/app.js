(function(){
  var contador = 1;
  var conjuntoContactos = []

  $(document).ready(start)

  function Persona (nombre, numero, email, foto){
    this.nombre = nombre;
    this.numero = numero;
    this.email = email;
    this.fotoURL = foto;
  }

  function start(){
    $('.modal').modal();
    $("#btnAddContact").click(createObject)
  }

  function createObject(){
    var nombreNuevo = $("#icon_prefix").val();
    var numeroNuevo = $("#icon_telephone").val();
    var emailNuevo = $("#icon_email").val();
    var fotoNuevo = $("#icon_foto").val();
    conjuntoContactos.push(new Persona(nombreNuevo, numeroNuevo, emailNuevo, fotoNuevo));
    creaNuevaTarjeta();
  }

  function creaNuevaTarjeta() {
    $("<li />").appendTo(".contactos-container").addClass("collection-item avatar collection-item" + contador);
    $("<i />").appendTo(".collection-item" + contador).addClass("material-icons circle prefix-icon" + contador).text("contacts");
    $("<span />").appendTo(".collection-item" + contador).attr({
      class: "title",
      id: "nameContainer" + contador
    }).text($("#icon_prefix").val());
    $("<p />").appendTo(".collection-item" + contador).text($("#icon_telephone").val());
    $("<p />").appendTo(".collection-item" + contador).text($("#icon_email").val());
    contador += 1;
    $("#contadorContactos").text(conjuntoContactos.length)
  }

}());

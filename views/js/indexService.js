const constantes ={
  nosotros: 
  "Hace mas de 20 años, nos dedicamos al mantenimiento del automotor, \
   trabajando con primeras marcas, siguiendo las normas tecnicas de cada fabricante.\
   Ofrecemos service integral para el auto y venta de repuestos para mecanica ligera",
  
  tituloServicios1:
  "SERVICE DE FILTROS Y LUBRICANTES",
  descServicios1: 
  "Trabajamos con primeras marcas como FRAM, MANN, MOTUL, VALVOLINE, CASTROL. Tambien tenemos marcas mas económicas",
  
  tituloServicios2:
  "REPUESTOS DE CARROCERIA",
  descServicios2:
  "Repuestos de carroceria par anacinales e importados: paragolpes, radiadiores y piezas de motor",
  
  // tituloServicios3:
  // "Filtros de aire tubulares y de habitáculo",
  // descServicios3:
  // "Servicio de fabricación de filtros de aire especiales para maquinaria pesada",

  // tituloServicios4:
  // "Asesoramiento tecnico",
  // descServicios4:
  // "Servicio de asesoramiento para la apertura de lubricentros. Facilidades en la compra inicial de mercaderia. ",

}

 //WHATSAPP FUNCTION
			$(function () {
        $('#WAButton').floatingWhatsApp({
          phone: '5491158150069', //WhatsApp Business phone number
           //headerTitle: 'Escribinos!', //Popup Title
          //popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
          showPopup: true, //Enables popup display
          buttonImage: '<img src="views/images/whatsappModern.png" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          //backgroundColor: 'crimson', //Custom background button color
          position: "right" //Position: left | right
   
        });
      })

// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes.nosotros);
inserstartextos("tituloServicios1", constantes.tituloServicios1);
inserstartextos("descServicios1",   constantes.descServicios1);
inserstartextos("tituloServicios2", constantes.tituloServicios2);
inserstartextos("descServicios2",   constantes.descServicios2);
// inserstartextos("tituloServicios3", constantes.tituloServicios3);
// inserstartextos("descServicios3",   constantes.descServicios3);
// inserstartextos("tituloServicios4", constantes.tituloServicios4);
// inserstartextos("descServicios4",   constantes.descServicios4);



window.onload = wpp();



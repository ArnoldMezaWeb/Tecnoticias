
 
var consulta = $("#search-table").DataTable();

$("#inputBusqueda").keyup(function() {

	consulta.search($(this).val()).draw();

	$("table").css({
		"height": "80vh",
		"background": "black",
		"opacity":"0.50",
		"display": "block"

		
	})

	if ($("#inputBusqueda").val() == ""){
	$("table").css({
		"height": "0",
		"background": "none",
		"display":"none"
		
		
		

	})

	$("#search").hide()

} else {
	$("#search").fadeIn("fast");
}
})
$('body').click(function() {
 $("table").fadeOut("fast");
});


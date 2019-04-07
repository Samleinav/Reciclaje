(function($) {
     "use strict";


    /*  Data Table
    -------------*/

			//var t = $('#tablecart').DataTable({});

			var tproducts = $('#bootstrap-data-table-export').DataTable( {
			processing: false,
			serverSide: true,
			ajax: {
					"url": "/shop/products",
					"type": "POST"
			},
			columnDefs: [{
					"targets": -1,
					"data": null,
					"defaultContent": '<button class="btn btn-link"><span class="glyphicon glyphicon-shopping-cart"></span></button>'
			}],
			columns: [
					{ "data": "ID" },
					{ "data": "Name" },
					{ "data": "Stock" },
					{ "data": "max per user" },
					{ "data": "Price" },
					{ "data": null}
			]
	} );
	
	tproducts.on( 'click', 'button', function () {
			var data = table.row( $(this).parents('tr') ).data();
			t.row.add( [
					data[0],
					data[1],
					data[2],
					data[4]
			] ).draw( false );
	} );


		$('#onPay').click(function(){
			let products = t.rows().data().toArray();
			$.ajax({
					url:'/',
					dataType:'json',
					type:'POST',
					data : products,
					success: function(result){
							if(result){ tproducts.ajax.reload(); }
					}

			})
		 });

})(jQuery);

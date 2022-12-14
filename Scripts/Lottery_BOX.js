// JavaScript Document
jQuery(function(){
	
    var parmasArray = window.location.href.split('?');
    var parmas = "";

    if (parmasArray.length == 2) {
        parmas = "?" + parmasArray[1];
    }

    jQuery("#btnA").click(function () {
        //特惠禮包
        //window.location.href = "/SalePackage/Index/";
        window.location.href = "/SalePackage/Index/" + SalePackageType + parmas;

        //window.location.href = "/Entry/index/";

		//jQuery("#showA").removeClass()
		//jQuery("#showB").removeClass().addClass("DISPLAY");
		//jQuery("#showC").removeClass().addClass("DISPLAY");
		//jQuery("#showD").removeClass().addClass("DISPLAY");
		//jQuery("#showE").removeClass().show();
		//jQuery("#btnA").css("background-color","#ff6a00");
		//jQuery("#btnB").css("background-color","");
		//jQuery("#btnC").css("background-color","")
		//jQuery("#btnD").css("background-color","");			
	});
	
    jQuery("#btnB").click(function () {
        //Gash點數卡
        window.location.href = "/Entry/BuyPointIndex/" + parmas;

        //window.location.href = "/Entry/GamaPayIntroduction/";

		//jQuery("#showA").removeClass().addClass("DISPLAY");
		//jQuery("#showB").removeClass().show();
		//jQuery("#showC").removeClass().addClass("DISPLAY");
		//jQuery("#showD").removeClass().addClass("DISPLAY");
		//jQuery("#showE").removeClass().addClass("DISPLAY");
		//jQuery("#btnA").css("background-color","");
		//jQuery("#btnB").css("background-color","#ff6a00");
		//jQuery("#btnC").css("background-color","")
		//jQuery("#btnD").css("background-color","");	
	});
    jQuery("#btnC").click(function () {
        //優惠好康
        window.location.href = "/Entry/index/" + parmas;

        //window.location.href = "/Entry/BuyPointIndex/";

		//jQuery("#showA").removeClass().addClass("DISPLAY");
		//jQuery("#showB").removeClass().addClass("DISPLAY");
		//jQuery("#showC").removeClass().show();
		//jQuery("#showC").load("/Entry/BuyPointIndex");
		//jQuery("#showD").removeClass().addClass("DISPLAY");
		//jQuery("#showE").removeClass().addClass("DISPLAY");
		//jQuery("#btnA").css("background-color","");
		//jQuery("#btnB").css("background-color","");
		//jQuery("#btnC").css("background-color","#ff6a00")
		//jQuery("#btnD").css("background-color","");		
	});
	jQuery("#btnD").click(function () {
	    //$.ajax({
	    //    url: "/Entry/QueryPayLogIndex/",
	    //    type: "GET",
	    //}).done(function (refreshContext) {
	    //    alert(refreshContext);
	    //    $("#showD").html(refreshContext);
	    //});


	    window.location.href = "/Entry/QueryPayLogIndex/" + parmas;
		//jQuery("#showA").removeClass().addClass("DISPLAY");
		//jQuery("#showB").removeClass().addClass("DISPLAY");
		//jQuery("#showC").removeClass().addClass("DISPLAY");
		//jQuery("#showD").removeClass().show();
		//jQuery("#showE").removeClass().addClass("DISPLAY");
		//jQuery("#btnA").css("background-color","");
		//jQuery("#btnB").css("background-color","");
		//jQuery("#btnC").css("background-color","")
		//jQuery("#btnD").css("background-color", "#ff6a00");
         
	});


	jQuery("#btnE").click(function () {
	    window.location.href = "/SalePackage/QAndA/" + parmas;
	});


	jQuery("#btnF").click(function () {
	    window.location.href = "/SalePackage/Index/" + ZeroType + parmas;
	});


});
function CategoryListDown() {
    $.ajax({
        type: 'Get',
        url: "/SalePackage/Index",
        data: {
            'isReload': true,
            'type':"1"
        },
        dateType: "json",
        success: function (result) {            
            var queryCategoryList = JSON.parse(result);
            var i;
            var htmlContent = "", catname = "", catid="";
            var arrlist = [1, 2, 7, 3, 4, 5];
            arrlist.forEach(function (entry) {
                htmlContent = "<li><a href=/SalePackage/Index/" + entry + ">全部</a></li>";
                for (i = 0; i < queryCategoryList.length; i++) {
                    if (queryCategoryList[i].VItemCategoryID == entry && queryCategoryList[i].ViewOrder !== "1") {
                        htmlContent += "<li><a href=/SalePackage/Index/" + entry + "?categoryid=" +
                            queryCategoryList[i].CategoryID + ">" + queryCategoryList[i].ProductClassName + "</a ></li > ";
                    }
                    if (queryCategoryList[i].VItemCategoryID == entry && queryCategoryList[i].ViewOrder === "1") {
                        catid = queryCategoryList[i].CategoryID;
                        catname = queryCategoryList[i].ProductClassName;
                    }
                    if (i == queryCategoryList.length-1) {
                        htmlContent += "<li><a href=/SalePackage/Index/" + catid + ">" + catname + "</a ></li > ";
                    }
                    
                }

                $(entry).html(htmlContent);
                htmlContent = '';
                  
                //} else if (entry == 2) {
                //    $('#dropDownSaleItem').html(htmlContent);
                //    htmlContent = '';
                //} else if (entry == 7) {
                //    $('#dropDownOtherItem').html(htmlContent);
                //    htmlContent = '';
                //} else if (entry == 3) {
                //    $('#dropDownFreeItem').html(htmlContent);
                //    htmlContent = '';
                //} else if (entry == 4) {
                //    $('#dropDownTicketArea').html(htmlContent);
                //    htmlContent = '';
                //} else if (entry == 5) {
                //    $('#dropDownMemberArea').html(htmlContent);
                //    htmlContent = '';
                //}

            });
        },
        error: function (result) {
            console.log(JSON.parse(result));
        }
    });
}
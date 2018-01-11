function showTableByIdentified() {
	var lineno = $("#test").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	$.ajax({
		type : 'post',
		url : 'overtime_order_identified_Show.php',
		data : {
			'lineno' : lineno,
			'SDate' : SDate,
			'EDate' : EDate
		},
		success : function(msg) {
			// alert(msg);
			$("#id").html(msg);
		}
	});
}

function showTable() {
	var lineno = $("#test").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	$.ajax({
		type : 'post',
		url : 'Select.php',
		data : {
			'lineno' : lineno,
			'SDate' : SDate,
			'EDate' : EDate
		},
		success : function(msg) {
			// alert(msg);
			$("#id").html(msg);
		}
	});
}

function showTableB() {
	var lineno = $("#test").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	$.ajax({
		type : 'post',
		url : 'overtime_order_identified_Show.php',
		data : {
			'lineno' : lineno,
			'SDate' : SDate,
			'EDate' : EDate
		},
		success : function(msg) {
			// alert(msg);
			$("#id").html(msg);
		}
	});
}

function getDValue() {
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	alert("Start Date: " + SDate + "End Date:" + EDate);
}

function showSwipeCardAbnormal() {
	var workshopNo = $("#WorkshopNo").val();
	var lineno = $("#LineNo").val();
	var checkState = $("#checkState").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	var byWorkShopOrLineNo = $("#byWorkShopOrLineNo").val();
	
	
	if(byWorkShopOrLineNo=='byWorkShop'){
		lineno="";
	}
	else{
		lineno = $("#LineNo").val();
	}
	
	var urlA = "";
	var urla1 = "overtime_order_pending_Abnormal.php";
	var urla2 = "overtime_order_identified_Abnormal.php";
	var urlB = "";
	var urlb1 = "show_overtime_Abnormal_ing_ByLineNo.php";
	var urlb2 = "show_overtime_Abnormal_ed_ByLineNo.php";
	
	var urlc1 = "show_overtime_Abnormal_ing_ByWorkShop.php";
	var urlc2 = "show_overtime_Abnormal_ed_ByWorkShop.php";
	
	console.log(urlb1);
	if(byWorkShopOrLineNo=='byLineNo'){
		if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
			urlA = urla1;
			urlB = urlb1;
		} else if (checkState == 1) {
			urlA = urla2;
			urlB = urlb2;
		}
	}
	else{
		if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
			urlA = urla1;
			urlB = urlc1;
		} else if (checkState == 1) {
			urlA = urla2;
			urlB = urlc2;
		} 
	}
	
	//alert("lineno: "+ lineno);
	$.ajax({
		type : 'post',
		url : urlB,
		data : {
			'workshopNo' : workshopNo,
			'lineno' : lineno,
			'checkState' : checkState,
			'SDate' : SDate,
			'EDate' : EDate,
			'urlA' : urlA
		},
		success : function(msg) {
			// alert(msg);
			$("#showRcNoTable").html(msg);
		}
	});
}

/**
 * 加班單查詢
 * @returns
 */
function showRCInforByDate() {
	var workshopNo = $("#WorkshopNo").val();
	var lineno = $("#LineNo").val();
	var checkState = $("#checkState").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	var byWorkShopOrLineNo = $("#byWorkShopOrLineNo").val();
	
	
	if(byWorkShopOrLineNo=='byWorkShop'){
		lineno="";
	}
	else{
		lineno = $("#LineNo").val();
	}
	
	var urlA = "";
	var urla1 = "overtime_order_pending_Show1.php";
	var urla2 = "overtime_order_identified_Show1.php";
	var urlB = "";
	var urlb1 = "show_overtime_rcno_ing_ByLineNo.php";
	var urlb2 = "show_overtime_rcno_ed_ByLineNo.php";
	
	var urlc1 = "show_overtime_rcno_ing_ByWorkShop.php";
    var urlc2 = "show_overtime_rcno_ed_ByWorkShop.php";
	
	console.log(urlb1);
	if(byWorkShopOrLineNo=='byLineNo'){
		if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
			urlA = urla1;
			urlB = urlb1;
		} else if (checkState == 1) {
			urlA = urla2;
			urlB = urlb2;
		} 
	}
	else{
		if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
			urlA = urla1;
			urlB = urlc1;
		} else if (checkState == 1) {
			urlA = urla2;
			urlB = urlc2;
		} 
	}
	
	
//	 alert("lineno: "+ lineno);
	$.ajax({
		type : 'post',
		url : urlB,
		data : {
			'workshopNo' : workshopNo,
			'lineno' : lineno,
			'checkState' : checkState,
			'SDate' : SDate,
			'EDate' : EDate,
			'byWorkShopOrLineNo':byWorkShopOrLineNo,
			'urlA' : urlA
		},
		success : function(msg) {
			// alert(msg);
			$("#showRcNoTable").html(msg);
		}
	});
}


function showRCInforByDate_lineleader() {
	var workshopNo = $("#WorkshopNo").val();
	var checkState = $("#checkState").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	
	
	var urlA = "";
	var urla1 = "overtime_order_pending_Show_lineleader.php";
	var urla2 = "overtime_order_identified_Show_lineleader.php";
	var urla3 = "overtime_order_check_Show.php";
	var urlB = "";
	var urlb1 = "show_overtime_rcno_ing_lineleader.php";//TODO
	var urlb2 = "show_overtime_rcno_ed_lineleader.php";
	var urlb3 = "show_overtime_rcno_all.php";
	console.log(urlb1);
	if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
		urlA = urla1;
		urlB = urlb1;
	} else if (checkState == 1) {

		urlA = urla2;
		urlB = urlb2;
	} else {
		urlA = urla3;
		urlB = urlb3;
	}
	// alert("urlA: "+ urlA);
	$.ajax({
		type : 'post',
		url : urlB,
		data : {
			'workshopNo' : workshopNo,
			'checkState' : checkState,
			'SDate' : SDate,
			'EDate' : EDate,
			'urlA' : urlA
		},
		success : function(msg) {
			// alert(msg);
			$("#showRcNoTable").html(msg);
		}
	});
}

function showRCInforByDatetest() {
	var lineno = $("#lineno").val();
	var checkState = $("#checkState").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	
	
	var urlA = "";
	var urla1 = "overtime_order_pending_Show_ver1.php";
	var urla2 = "overtime_order_identified_Show_test.php";
	var urla3 = "overtime_order_check_Show_test.php";
	var urlB = "";
	var urlb1 = "show_overtime_rcno_ing.php";
	var urlb2 = "show_overtime_rcno_ed.php";
	var urlb3 = "show_overtime_rcno_al.php";
	console.log(checkState);
	if (checkState.indexOf("0") >= 0 || checkState.indexOf("9") >= 0) {
		urlA = urla1;
		urlB = urlb1;
	} else if (checkState == 1) {

		urlA = urla2;
		urlB = urlb2;
	} else {
		urlA = urla3;
		urlB = urlb3;
	}
	// alert("urlA: "+ urlA);
	$.ajax({
		type : 'post',
		url : urlB,
		data : {
			'lineno' : lineno,
			'checkState' : checkState,
			'SDate' : SDate,
			'EDate' : EDate,
			'urlA' : urlA
		},
		success : function(msg) {
			// alert(msg);
			$("#showRcNoTable").html(msg);
		}
	});
}

function openTableWindow() {
	LGameWindow = window.open('', 'gameWindow', 'width=1000,height=600,scrollbars=yes ');
	LGameWindow.focus();
	return true;
}


function showEmployeeByLineNo() {
	var lineno = $("#lineno").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	
	var urlA = "swipecardtime_byBigline_show.php";
	$.ajax({
		type : 'post',
		url : urlA,
		data : {
			'lineno' : lineno,
			'SDate' : SDate,
			'EDate' : EDate,
		},
		success : function(msg) {
			$("#showEmployeeByLineNo").html(msg);
		}
	});
}

function showEmployeeInfor() {
	var id = $("#lineno").val();
	var SDate = $("#dpick1").val();
	var EDate = $("#dpick2").val();
	
	var urlA = "EmployeeInfor_show.php";
	$.ajax({
		type : 'post',
		url : urlA,
		data : {
			'id' : id,
			'SDate' : SDate,
			'EDate' : EDate,
		},
		success : function(msg) {
			$("#showEmployeeInfor").html(msg);
		}
	});
}
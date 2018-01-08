<?php 
	session_start();
	$access = $_SESSION["permission"];
?>
<?php
include("mysql_config.php");

$line_sql = "SELECT workshopno FROM `lineno` WHERE workshopno != '' GROUP BY workshopno";

$line_rows = $mysqli->query($line_sql);
while($row = $line_rows->fetch_array()){
    $workshopNo[] = $row;
}

?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<link href="assets/css/icons.css" rel="stylesheet">
<link href="assets/css/bootstrap.css" rel="stylesheet">
<link href="assets/css/plugins.css" rel="stylesheet">
<link href="assets/css/main.css" rel="stylesheet">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/jquery.js"></script>
<!--<script src="assets/js/jquery-1.8.3.min.js"></script>-->
<script language="javascript" type="text/javascript" src="assets/My97DatePicker/WdatePicker.js"></script>
<script src="js/Button_Plugins1.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#WorkshopNo").change(function () {
                var workshopno = $(this).val();

                $("#lineSpan").load("getLineNo.php?workshopno=" + workshopno);
            });
        })


    </script>
</head>
<body>



	<div id="header" class="header-fixed">
		<div class="navbar">
			<a class="navbar-brand" href="Login.html"> <i
				class="im-windows8 text-logo-element animated bounceIn"></i><span
				class="text-logo">FOX</span><span class="text-slogan">LINK</span>
			</a>
		</div>
		<!-- Start .header-inner -->
	</div>

	<div style="position: absolute; top: 55px; margin-left: 10px">
		<div class="panel-body" style="border: 1px solid #e1e3e6;">
			開始日期-<input id="dpick1" class="Wdate" type="text"
				onClick="WdatePicker()"> 結束日期-<input id="dpick2"
				class="Wdate" type="text" onClick="WdatePicker({maxDate:'%y-%M-#{%d-1}'})">
            車間<select id="WorkshopNo">
				<option value="%">All</option>

				<?php
                foreach ($workshopNo as $k=>$v){
                    ?>
                <option value="<?php echo $v['workshopno']?>"><?php echo $v['workshopno']?></option>

<!--
                   $cch = '';
				foreach($workshopNo as $key => $val){
					$cch .= "<option value = \"".$val."\">";
					$cch .= $val;
					$cch .= "</option>";

				}
				echo $cch;-->

                <?php
                }
                ?>
            </select>
            線名<span id="lineSpan">
                   <select  id="LineNo" name="LineNo">

                    <option value="%">--線名--</option>
                   </select>
                </span>
			 加班單狀態-<select id="checkState">
		<!--		<option value="All">All</option>   -->
				<option value="'0','9'">未審核</option>
				<option value="1">已審核</option>
			</select> <input name="" class="btn btn-primary" type="button"
				onclick="showRCInforByDate();" value="查詢" />
			</select> <input name="" class="btn btn-primary" type="button"
				onclick="showSwipeCardAbnormal();" value="忘卡查詢" />


		</div>
		<div id="showRcNoTable"></div>
	</div>
?>

</body>
</html>
<?php 
    set_time_limit(0); 
	session_start();
	$access = $_SESSION["permission"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="assets/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript">
	
</script>
</head>
<body>
	<?php 
			
		include("mysql_config.php");
		
		$timeCal = $_POST['timeCal'];
		$timeType = $_POST['timeType'];
		$workshopNo = $_POST['workshopNo'];
		$rC_NO = $_POST['rC_NO'];
		$item_No = $_POST['item_No'];
		
		$assistant_id = $_SESSION['assistant_id'];
		
		$person_sql = "select * from assistant_data where application_id='$assistant_id'";
		
		//echo $person_sql."<Br>";
		
		$zhuli_rows = $mysqli->query($person_sql);
		while($row = $zhuli_rows->fetch_assoc()){
			$application_person = $row['application_person'];
			$application_id = $row['application_id'];
			$application_dep = $row['application_dep'];
			$application_tel = $row['application_tel'];
		}
        mysqli_free_result($zhuli_rows);
		
        if(strcmp($application_person,"")<=0){
			echo "alert(\"當前登錄線長或助理登錄信息缺失，請嘗試更換電腦，或者重新登錄！\");\n";
			return false;
		}
		
		if($_POST['workcontent']){
			$WorkContent = $_POST['workcontent'];
		}else{
			$WorkContent = $item_No."_".$rC_NO;
		}
		// echo "workContent: ".$WorkContent;
		$calHour = $_POST['calHour'];
		$calInterval = $_POST['calInterval'];	
		$checkValue = $_POST['dropId'];
		$ids = $_POST['ids'];
		$names = $_POST['names'];	
		$depname = $_POST['depname'];
		$costids = $_POST['costids'];
		$directs = $_POST['directs'];
		$shift = $_POST['shift'];
		$yds = $_POST['ydss'];
		$depids = $_POST['depids'];
		
		$a = array();
		// var_dump($checkValue);
		// echo count($checkValue);
		for ($i = 0; $i < count($checkValue); $i++) {
			$a[$i][0]=$checkValue[$i];
			$a[$i][1]=$ids[$i];
			$a[$i][2]=$names[$i];
			$a[$i][3]=$depids[$i];
			$a[$i][4]=$depname[$i];
			$a[$i][5]=$calInterval[$i];
			$a[$i][6]=$calHour[$i];
			 
			if($calHour[$i]==0){
				echo "alert(\"工時小於等於0，有誤，請重新選擇加班人員！\");\n";
				return false;
			}
			$a[$i][7]=$costids[$i];
			$a[$i][8]=$directs[$i];
            
            if($timeType==1&&$calHour[$i]!=2){
				$exception = 1;
			}else if(($timeType==2||$timeType==3)&&$calHour[$i]!=10){
				$exception = 1;
			}else{
				$exception = 0;
			}
			$a[$i][9]=$exception;
		}
		// var_dump($calHour);
		// exit;
		
		for($i=0;$i<count($checkValue);$i++){
			$update_sql = "update testswipecardtime set CheckState = '1',overtimeCal='".$timeCal."',overtimeType='".$timeType."' where RecordId = '".$a[$i][0]."'";
			$cch = "insert into notes_overtime_state (id,name,depid,depname,overtimeInterval,overtimeHours,costID,
		        	Direct,isException,overtimeDate,shift,overtimeType,WorkshopNo,RC_NO,PRIMARY_ITEM_NO,WorkContent,application_person, application_id,
       		    	application_dep, application_tel) 
			        value (";
			for($j=1;$j<=9;$j++){
				$cch .= "'".$a[$i][$j]."',";
			}
			$cch .= "'".$yds."',";
			$cch .= "'".$shift."',";
			$cch .= "'".$timeType."',";
			$cch .= "'".$workshopNo."',";
			$cch .= "'".$rC_NO."',";
			$cch .= "'".$item_No."',";
			$cch .= "'".$WorkContent."',";
			$cch .= "'".$application_person."',";
			$cch .= "'".$application_id."',";
			$cch .= "'".$application_dep."',";
			$cch .= "'".$application_tel."')";
			$insert_sql = $cch;
			
			 $cch = '';
		//	 echo $update_sql."<br>";
		//	 echo $insert_sql."<br>";
			
			$update_rows = $mysqli->query($update_sql);
			$insert_rows =$mysqli->query($insert_sql);
		}
	
		$mysqli->close();
?>

</body>
</html>


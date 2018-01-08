<?php
include("mysql_config.php");
$workshopno=$_GET['workshopno'];
file_put_contents("d:/file.txt",$workshopno,FILE_APPEND);
$sql="select lineno from lineno where workshopno='$workshopno' and lineno is not null and lineno != '' GROUP BY lineno";

$query=$mysqli->query($sql);
while($row=$query->fetch_array()){
    $lineno[]=$row;
}
?>
<select id="LineNo" name="LineNo"">
    <option value="">--線名--</option>
    <?php
    foreach($lineno as $k=>$v){
        ?>
        <option value='<?php echo $v['lineno']?>'><?php echo $v['lineno']?></option>
        <?php
    }
    ?>
</select>

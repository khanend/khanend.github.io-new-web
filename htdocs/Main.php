<?php
    
    function dev(){
        $myfile = fopen("number.csv", "r") or die("Unable to open file!");
        echo fread($myfile,filesize("number.csv"));
        fclose($myfile);
    }

?>

<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">

</head>
<body>
<?php
$objCSV = fopen("test2.csv", "r");
?>
<table width="1200" border="7" class="container" >
  <tr>
    <th width="60"> <div align="center">Name </div></th>
    <th width="60"> <div align="center">Price </div></th>
    <th width="60"> <div align="center">Size </div></th>
    <th width="90"> <div align="center">quality</div></th>
    <th width="59"> <div align="center">quatity</div></th>
  </tr>
<?php
while (($objArr = fgetcsv($objCSV, 1000, ",")) !== FALSE) {
?>
  <tr>
    <td><div align="center"><?php echo $objArr[0];?></div></td>
    <td><?php echo $objArr[1];?></td>
    <td><div  align="center"><?php echo $objArr[2];?></div></td>
    <td><div ><?php echo $objArr[3];?></div></td>
    <td ><?php echo $objArr[4];?></td>
  </tr>
<?php
}
fclose($objCSV);
?>
<br></table><br>
    <form method ="POST" class= "container">
       <input type="submit" value ="Download File" name = "Download" class="btn btn-primary">
    </form><br>

    <form action="Uploads.php" method="post" enctype="multipart/form-data" class="container">
            Select CSV file to upload
            <input type="file" name="userfile" accept=".csv">
            <input type="submit" value="Upload File" name="submit" class="btn btn-success">
        </form>
        <form action="Profile.php" class = "container">
          <input type="submit" value = "Add" name =profile class="btn btn-danger">

        </form>
    <?php
        if(isset($_POST['Download'])){
            header('Location: download.php');
        }

    ?>
    
  
    
    


</body>
</html>
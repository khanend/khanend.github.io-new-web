</table>
<html>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">


<body class = "container">
<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $price = $_POST['price'];
        $size = $_POST['size'];
        $quality = $_POST['quality'];
        $quatity = $_POST['quatity'];

        $obj = fopen("test2.csv", "a");
        $wait =$name.",".$price.",".$size.",".$quality.",".$quatity."\n";
        fwrite($obj, $wait);
        fclose($obj);

    }

?>
<?php
// define variables and set to empty values
$nameE = $priceE = $sizeE = $qualityE = $quatityE ="";
$name = $price = $size = $quality = $quatity ="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameE = "#Name is required";
  } else {
    $name = input($_POST["name"]);
  }
  
  if (empty($_POST["price"])) {
    $priceE = "#Price is required";
  } else if(is_numeric($_POST["price"]) == false){
    $priceE = "Price is only numeric";
  }
  else{
    $price = input($_POST["price"]);

  }

  if (empty($_POST["quality"])) {
    $qualityE = "#Quality is required";
  }  else if(is_numeric($_POST["quality"]) == false){
    $priceE = "quality is only numeric";
  }
  
  else {
    $quality = input($_POST["quality"]);
  }
 

  if (empty($_POST["size"])) {
    $sizeE = "#Size is required";
  } else if($POST["size"]!="M" || $POST["size"] != "L"|| $POST["size"]!="S" ){
    $qualityE = "#Quality is only S,M,L";
  }
  else {
    $size = input($_POST["size"]);
  }

  if (empty($_POST["quatity"])) {
    $quatityE = "#Quatity is required";
  } else {
    $quatity = input($_POST["quatity"]);
  }
}

function input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

    <form method="POST" action=" <?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Name:<br>
        <input type="text" name ="name"><span class="error">
        <?php echo $nameE;?></span>
        <br>
        Price:<br>
        <input type="text" name="price"><span class="error">
        <?php echo $priceE;?></span>
        <br>
        Size:<br>
        <input type="text" name="size"><span class="error"><?php echo $sizeE;?></span>
        <br>
        quality:<br>
        <input type="text" name="quality"><span class="error">
        
        <?php echo $qualityE;?></span>
        <br>
        quatity:<br>
        <input type="text" name="quatity"><span class="error"> <?php echo $quatityE;?></span><br><br>
        <input type="submit" value = "Submit" name="submit" class="btn btn-success">
    </form>

    <form action="up.php" method="post" enctype="multipart/form-data">
            <input type="file" name="Picture File" accept=".">
            <input type="submit" value="Upload File" name="submit" class="btn btn-danger">
        </form>

    <a href="Main.php">Back to home</a>
    


</body>
</html>
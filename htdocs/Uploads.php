<?php


$uploaddir = '';
$uploadfile = 'test2.csv';

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo " Successfully uploaded.\n";
} 
else {
    echo "Possible file upload attack!\n";
}
echo '<a href="downloads.php">Back to Home</a>';

?>

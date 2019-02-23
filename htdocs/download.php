<?php
 header('Content-Type: application/csv');
 header('Content-Disposition: attachment; filename=File.csv');
 readfile("test2.csv");
?>

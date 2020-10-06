<?php

    $names = ['David', 'Sotto', 'Mayor', 'Maciel', 'Fernandes'];

    if(isset($_POST['name'])){
        $userName = $_POST['name'];

        foreach($names as $name){
            if($name == $userName){
                echo 'Name Exits!';
                return;
            }
        }

        echo 'Name not found!';

    }

?>
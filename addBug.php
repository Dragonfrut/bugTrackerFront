<?php
    session_start();
    require_once('lib.php');
    checkLogin();
?>

<html>
    <?php
    include('header.php');
    ?>
    <body>
        <?php
        include('nav.php');
        ?>
        <br />
        <h1>Add Bug</h1>
        <?php
        include('bugForm.php');
        ?>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="/JS/api.js?cachebuster=<?=time()?>"></script>
        <script src="/JS/addBug.js?cachebuster=<?=time()?>"></script>
    </body>

</html>

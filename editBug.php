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
        <h1>Edit Bug</h1>
        <div id="loading">
            loading...   
        </div>
        <div id="bug-form-wrapper" class='hidden'>
        <?php
        include('bugForm.php');
        ?>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="/JS/api.js?cachebuster=<?=time()?>"></script>
        <script src="/JS/editBug.js?cachebuster=<?=time()?>"></script>
    </body>

</html>

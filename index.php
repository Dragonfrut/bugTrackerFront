<?php
    session_start();
    require_once('lib.php');
    checkLogin();
?>

<html>
    <head>
        <script>
            const token = '<?=$_SESSION['token']?>';
        </script>
    </head>
    <body>
        <a href='/logout.php'>Logout</a>
        <br />
        <h1>hello world</h1>
        <table id='bugs'>
            <tr>
                <td>Title</td>
                <td>date created</td>
                <td>reported by</td>
            </tr>
        </table>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="/api.js?cachebuster=<?=time()?>"></script>
    </body>

</html>

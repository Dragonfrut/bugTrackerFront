<?php
session_start();
?>

<html>
    <head>

    </head>
    <body>
        <h1>login</h1>
        <form method='POST' action="controller.php">
            <table>
                <tr>
                    <td>Email</td>
                    <td><input type="text" required="true" name="email"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" required="true" name="password"></td>
                </tr>
                <tr>
                    <td><button type="submit">Submit</button> </td>
                </tr>
                <tr>
                    <td><?=isset($_SESSION['error'])?$_SESSION['error']:''?></td>
                </tr>
            </table>
        </form>
    </body>
</html>
<?php

$_SESSION['error'] = '';

?>
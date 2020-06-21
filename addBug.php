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
        <?php
        include('nav.php');
        ?>
        <br />
        <h1>Add Bug</h1>
        <form method='POST' action="controller.php">
            <input type="hidden" value='addBug' name='action' />
            <table id='bug'>
                <tr>
                    <td>Title</td>
                    <td><input type='text' required='true' name='title' /></td>
                </tr>
                <tr>
                    <td>Severity</td>
                    <td><select name='severity'>
                        <?=severityDropdown();?>
                    </select></td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td><input type='text' name='status' /></td>
                </tr>
                <tr>
                    <td>Operating System</td>
                    <td><input type='text' name='operating_systems' /></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input type='text' name='description' /></td>
                </tr>
                <tr>
                    <td>Project</td>
                    <td><input type='text' name='project' /></td>
                </tr>
                <tr>
                    <td>Assigned user</td>
                    <td><input type='text' name='assigned_user' /></td>
                </tr>
                <tr>
                    <td><button type="submit">Submit</button> </td>
                </tr>

                
            </table>
        </form>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="/api.js?cachebuster=<?=time()?>"></script>
    </body>

</html>

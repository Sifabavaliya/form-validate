<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display table</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>

    <h3>Display Value</h3>
    <table>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      <tr>
        <th>First Name:</th>
        <td id="fname"><?php echo $_GET['first_name']; ?></td>
      </tr>
      <tr>
        <th>Last Name:</th>
        <td id="lname"><?php echo $_GET['last_name']; ?></td>
      </tr>
      <tr>
        <th>Date Of Birth:</th>
        <td id="Dob"><?php echo $_GET['dob']; ?></td>
      </tr>
      <tr>
        <th>University:</th>
        <td id="Uni"><?php echo $_GET['university']; ?></td>
      </tr>
      <tr>
        <th>Gender:</th>
        <td id="gen"><?php echo $_GET['Gender']; ?></td>
      </tr>
      <tr>
        <th>Mobile Number:</th>
        <td id="mob_no"><?php echo $_GET['mobile_no']; ?></td>
      </tr>

      <tr>
        <th>Email Id:</th>
        <td id="emailid"><?php echo $_GET['email_id']; ?></td>
      </tr>
      <tr>
        <th>Password:</th>
        <td id="Password"><?php echo $_GET['password']; ?></td>
      </tr>
      <tr>
        <th>Confirm Password:</th>
        <td id="con_pass"><?php echo $_GET['confirm_password']; ?></td>
      </tr>
      <tr>
        <th>Favriout Food:</th>
        <td id="fev_food"><?php 
        $fevfood=$_GET['fevfood'];
        foreach($fevfood as $food)
        echo "$food," ?></td>
      </tr>
      <tr>
        <th>Massage:</th>
        <td id="Massage"><?php echo $_GET['msg']; ?></td>
      </tr>
    </table>
    <script src="./assets/js/script.js"></script>
</body>
</html>
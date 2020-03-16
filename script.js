

function passGenerator() {
    // Alert 1
    // created a variable to hold the length
    var length = prompt("Select the length of the passward: (between 8 to 128)");
    //converted string input to integer
    var passLength = parseInt(length);
    console.log(parseInt(passLength));

    // created an empty variable to generate password from
    let value = "";

    // Alert 2
    // created a boolean variable for user choice if he wants to include upper case
    var upCase = confirm("Include UpperCase? ");
    // if true, added all capital letter into value
    if (upCase == true) {
        value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    console.log(value);

    //Alert 3
    // created a boolean variable for user choice if he wants to include lower case
    var lowCase = confirm("Include LowerCase? ");
    // if true, concate all small letter into value
    if (lowCase == true) {
        value = value.concat("abcdefghijklmnopqrstuvwxyz");
    }
    console.log(value);

    // Alert 4
    //created a boolean variable for user choice if he wants to inclue number
    var num = confirm("Include Numeric? ");
    // if true, concate all the number with value
    if (num == true) {
        value = value.concat("0123456789");
    }
    console.log(value);

    // Alert 5
    // created a boolean variable for user choice if he wants to include special charcter into value
    var char = confirm("Include Special Character? ");
    // if true, concate all the special charcter with value
    if (lowCase == true) {
        value = value.concat("!@#$%^&*()_+");
    }
    console.log(value);

    // empty variable for password
    let password = "";

    // loop length is password length from alert 1
    for (var i = 1; i <= passLength; i++) {

        // generated random integer value between 0 to length of the value
        let randNumb = Math.floor(Math.random() * (value.length) - 1);
        password = password + value.charAt(randNumb);
        //console.log(password);
    }

    console.log(password);
    document.getElementById('displayPass').innerHTML = password;
}
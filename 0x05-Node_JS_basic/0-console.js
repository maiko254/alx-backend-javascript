/**
 * Prints a string to STDOUT.
 * @param {String} msg The message to display.
 * @author Michael Bonyo <https://github.com/maiko254>
 */
function displayMessage(data) {
    process.stdout.write(data + '\n');
}

module.exports = displayMessage;

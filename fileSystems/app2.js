// ******* Promise API *****

const fs1 = require("fs/promises");

(async () => {
    try {
        await fs1.copyFile("command.txt", "copied-promise.txt")
    } catch (error) {
        console.log(error)
    }
})();


// **** Callback API ***** //

const fs2 = require("fs");

fs2.copyFile("command.txt", "copied-callback.txt", (error) => {
    if (error) console.log(error)
})


// ****** Synchronous API ******//

const fs3 = require("fs");

fs3.copyFileSync("text.txt", "copied-sync.txt")
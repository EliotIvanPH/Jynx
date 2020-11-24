/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require("fs-extra")
const path = require("path")
exports.onPostBuild = () => {
    console.log("Copying locales")
    fs.copySync(
        path.join(__dirname, "/src/locales"),
        path.join(__dirname, "/public/locales")
    )
}
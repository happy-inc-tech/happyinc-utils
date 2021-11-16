#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'fs/promises'
import { resolve, dirname } from "path";
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const packageJsonPath = resolve(__dirname, '../package.json')
async function updatePackageJson() {
    const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
    packageJson.exports = {}
    const distDir = await readdir(resolve(__dirname, '../packages'))
    distDir.forEach((slug) => {
        const slugDir = `./${slug}`
        packageJson.exports[slugDir] = `./packages/${slug}/index.js`
    })
    await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8')
}

updatePackageJson()
    .then(() => {
        console.log(':: package.json exports updated')
        process.exit()
    })
    .catch((err) => {
        console.error(':: Updating exports failed')
        console.error(err)
        process.exit(1)
    })
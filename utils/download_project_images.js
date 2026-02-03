import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECTS_JSON = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../src/data/_projects.json'), 'utf-8')
)

const IMAGES_DIR = path.join(__dirname, '../src/assets/images/projects')

export function getRepoPath(githubUrl) {
    return githubUrl.replace('https://github.com/', '')
}

export function getImageFilename(repoPath) {
    return repoPath.replace(/\//g, '-') + '.png'
}

async function downloadImage(url, filepath) {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Failed to download ${url}: ${res.status}`)
    }
    const buffer = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(filepath, buffer)
}

export default async function () {
    console.log('Processing project images...')

    // Ensure images directory exists
    if (!fs.existsSync(IMAGES_DIR)) {
        fs.mkdirSync(IMAGES_DIR, { recursive: true })
    }

    await Promise.all(
        PROJECTS_JSON.map(async (project) => {
            if (!project.github) {
                return
            }

            const repoPath = getRepoPath(project.github)
            const filename = getImageFilename(repoPath)
            const filepath = path.join(IMAGES_DIR, filename)
            const imageUrl = `https://opengraph.githubassets.com/1/${repoPath}`

            // Download image if it doesn't exist
            if (!fs.existsSync(filepath)) {
                try {
                    console.log(`Downloading image for ${project.title}...`)
                    await downloadImage(imageUrl, filepath)
                } catch (err) {
                    console.log(err)
                    console.warn(
                        `Failed to download image for ${project.title}:`,
                        err.message
                    )
                }
            }
        })
    )
}

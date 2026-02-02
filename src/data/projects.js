import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectsJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '_projects.json'), 'utf-8')
)

const IMAGES_DIR = path.join(__dirname, '../assets/images/projects')

function getRepoPath(githubUrl) {
    return githubUrl.replace('https://github.com/', '')
}

function getImageFilename(repoPath) {
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
    // Ensure images directory exists
    if (!fs.existsSync(IMAGES_DIR)) {
        fs.mkdirSync(IMAGES_DIR, { recursive: true })
    }

    const projects = await Promise.all(
        projectsJson.map(async (project) => {
            if (!project.github) {
                return project
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
                    console.warn(
                        `Failed to download image for ${project.title}:`,
                        err.message
                    )
                    return project
                }
            }

            return {
                ...project,
                localImage: `/assets/images/projects/${filename}`
            }
        })
    )

    return projects
}

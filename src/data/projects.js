import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import {
    getRepoPath,
    getImageFilename
} from '#utils/download_project_images.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECTS_JSON = JSON.parse(
    fs.readFileSync(path.join(__dirname, '_projects.json'), 'utf-8')
)
const IMAGES_DIR = path.join(__dirname, '../assets/images/projects')

export default function () {
    return PROJECTS_JSON.map((project) => {
        if (!project.github) {
            return project
        }

        const repoPath = getRepoPath(project.github)
        const filename = getImageFilename(repoPath)
        const filepath = path.join(IMAGES_DIR, filename)
        if (!fs.existsSync(filepath)) {
            return project
        } else {
            const localImage = `/assets/images/projects/${filename}`
            return {
                ...project,
                localImage
            }
        }
    })
}

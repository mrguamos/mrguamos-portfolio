import { chmod, readFile, writeFile } from 'node:fs/promises'
import { pdf, render } from 'resumed'
import theme from 'jsonresume-theme-relaxed'

const resume = JSON.parse(await readFile('public/resume.json', 'utf8'))
const html = await render(resume, theme)
const buffer = await pdf(html, resume, theme)
await writeFile('public/Resume-Mark-Ryan-Guamos.pdf', buffer)
await chmod('public/Resume-Mark-Ryan-Guamos.pdf', 0o644)
console.log('Exported public/Resume-Mark-Ryan-Guamos.pdf')

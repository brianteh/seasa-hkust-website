import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const sourceFile = path.join(distDir, 'index.html')

if (!fs.existsSync(sourceFile)) {
  throw new Error('dist/index.html not found. Run vite build first.')
}

let html = fs.readFileSync(sourceFile, 'utf8')

const setMeta = (input, attribute, key, value) => {
  const expression = new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`, 's')
  return input.replace(expression, `$1${value}$2`)
}

const eventsTitle = 'Events | SEASA HKUST'
const eventsDescription =
  'Discover upcoming events organized by SEASA at HKUST. Join us for cultural celebrations, networking opportunities, and community building activities.'
const eventsUrl = 'https://seasa.su.hkust.edu.hk/events'

html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${eventsTitle}</title>`)
html = setMeta(html, 'name', 'description', eventsDescription)
html = setMeta(html, 'property', 'og:title', eventsTitle)
html = setMeta(html, 'property', 'og:description', eventsDescription)
html = setMeta(html, 'property', 'og:url', eventsUrl)
html = setMeta(html, 'name', 'twitter:title', eventsTitle)
html = setMeta(html, 'name', 'twitter:description', eventsDescription)
html = setMeta(html, 'name', 'twitter:url', eventsUrl)
html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${eventsUrl}$2`)

const eventsDir = path.join(distDir, 'events')
fs.mkdirSync(eventsDir, { recursive: true })
fs.writeFileSync(path.join(eventsDir, 'index.html'), html)

console.log('Created dist/events/index.html fallback with event metadata.')

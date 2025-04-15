import { marked } from 'marked'

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: new marked.Renderer(),
})

export default (markdown: string) => marked.parse(markdown)

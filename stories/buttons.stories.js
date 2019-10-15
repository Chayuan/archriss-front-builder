import Twig from 'twig'
import '../dist/css/app.css'

export default {
  title: 'Boutons'
}

export const heading = () => '<h1>Hello World</h1>'

export const button = () => {
  const template = Twig.twig({
    href: '../src/views/components/button.twig',
    async: false
  })

  const html = template.render({ text: 'Hello world' })
  return html
}

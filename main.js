import RevealNotes from "./assets/plugin/notes/notes.esm.js"
import RevealHighlight from "./assets/plugin/highlight/highlight.esm.js"
import Internation from "./assets/plugin/internation/internation.esm.js"
import FR from "./assets/languages/fr.json"

import Reveal from './assets/lib/reveal.esm.js'

Reveal.initialize({  
  history: true,
  transition: 'linear',
  hash: true,
  internation: {
    switchselector: '.langchooser',
    languages: {
      fr: {
        name: 'Français',
        dictionary: FR
      },
    }
  },
  plugins: [ RevealHighlight, RevealNotes, Internation ]
})
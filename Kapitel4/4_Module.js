// Inline Export
export function info(meldung) {
  console.log(meldung);
}
export function debug(meldung) {
  console.debug(meldung);
}
export function warn(meldung) {
  console.warn(meldung);
}
export function error(meldung) {
  console.warn(meldung);
}

// Gesammelter Export
export {info, debug, warn, error}

// Import einzelner Komponenten
import {info, debug, warn, error} from 'logger'

// Import des gesamten Moduls
import 'logger' as l;

// Import einzelner Komponenten unter anderen Namen
import {info as i, debug as d, warn as w, error as e} from ''

// Export einer importierten Komponente unter anderem Namen
export {info as infoFunktion} from 'logger';







module 'logger' {
  export function info(meldung) {
    console.log(meldung);
  }
  export function debug(meldung) {
    console.debug(meldung);
  }
  export function warn(meldung) {
    console.warn(meldung);
  }
  export function error(meldung) {
    console.warn(meldung);
  }
}
import type { App } from 'vue'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    for (const comkey in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const Comp = components[comkey]
      if (Comp.install)
        app.component(Comp.__name, Comp)
    }
    return app
  },
}
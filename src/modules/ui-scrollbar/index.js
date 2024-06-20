import SimpleBar from 'simplebar'
import { moonBlock } from '@verno.digital/moon-block'

moonBlock('.ui-scrollbar', ({ block }) => {
  new SimpleBar(block, {
    classNames: {
      contentEl: 'ui-scrollbar__content',
      horizontal: 'ui-scrollbar__track--horizontal',
      vertical: 'ui-scrollbar__track--vertical',
      scrollbar: 'ui-scrollbar__scrollbar',
      track: 'ui-scrollbar__track'
    }
  })
})

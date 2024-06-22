import { moonBlock } from '@verno.digital/moon-block'
import StarRating from 'star-rating.js'

moonBlock('.smart-stars', ({ block }) => {
  const starratingPrebuilt = new StarRating(block, {
    classNames: {
      active: 'gl-active',
      base: 'gl-star-rating',
      selected: 'gl-selected'
    },
    clearable: true,
    maxStars: 5,
    stars: true,
    tooltip: false
  })
})

'use client'

import loadable from '@loadable/component'

/* Default Skin S */
const DefaultForm = loadable(() => import('../components/skins/default/Form'))
const DefaultView = loadable(() => import('../components/skins/default/View'))
const DefaultList = loadable(() => import('../components/skins/default/List'))
const DefaultComment = loadable(
  () => import('../components/skins/default/Comment'),
)

const DefaultSkin = {
  form: DefaultForm,
  view: DefaultView,
  list: DefaultList,
  comment: DefaultComment,
}
/* Default Skin E */

/* Gallery Skin S */
const GalleryForm = loadable(() => import('../components/skins/gallery/Form'))

const GalleryView = loadable(() => import('../components/skins/gallery/View'))

const GalleryList = loadable(() => import('../components/skins/gallery/List'))

const GalleryComment = loadable(
  () => import('../components/skins/gallery/Comment'),
)
const GallerySkin = {
  form: GalleryForm,
  view: GalleryView,
  list: GalleryList,
  comment: GalleryComment,
}
/* Gallery Skin E */

export default function useSkin(
  skin: string | undefined,
  mode: 'form' | 'view' | 'list' | 'comment',
) {
  if (!skin) return
  let _skin = null
  switch (skin) {
    case 'gallery':
      _skin = GallerySkin
      break
      
    default:
      _skin = DefaultSkin
  }

  return _skin[mode]
}

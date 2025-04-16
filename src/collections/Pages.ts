import { CollectionConfig } from 'payload'
import { Hero } from '@/blocks/Hero/config'
import { Content } from '@/blocks/Content/config'
import { Media } from '@/blocks/Media/config'

const Pages: CollectionConfig = ({
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, Content, Media]
    }
  ]
});

export default Pages;
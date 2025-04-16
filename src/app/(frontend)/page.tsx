import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import { Page } from '@/payload-types'

import config from '@/payload.config'

import { HeroBlock } from '@/blocks/Hero/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { MediaBlock } from '@/blocks/Media/Component'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const { user } = await payload.auth({ headers })

  const { docs: [page] } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  });

  if (!page) {
    return <div>Die Seite existiert nicht</div>
  }

  const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />;
      case 'content':
        return <ContentBlock block={block} key={block.id} />;
      case 'media':
        return <MediaBlock block={block}key={block.id}/>
      default:
        return null;
    }
  }

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <h1>
          Klangkollektiv Braunschweig e.V.
        </h1>
      </div>
      <div>{page.layout.map((block) => renderBlock(block))}</div>
    </div>
  )
}

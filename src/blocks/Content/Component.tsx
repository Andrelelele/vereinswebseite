import { Page } from '@/payload-types'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type ContentProps = Extract<Page['layout'][0], { blockType: 'content' }>;

export const ContentBlock = ({ block }: { block: ContentProps }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}
    >
      <div className={'bg-amber-300'}>
        <h2>{block.heading}</h2>
        <RichText data={block.content}/>
      </div>
    </div>
  );
}
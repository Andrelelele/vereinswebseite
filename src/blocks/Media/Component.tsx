import { Page } from '@/payload-types'
import Image from 'next/image'

type MediaProps = Extract<Page['layout'][0], { blockType: 'media' }>;

export const MediaBlock = ({ block }: { block: MediaProps }) => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px'
    }}>
    {typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image.url} alt={block.blockType} className={'object-contain'} width={400} height={400}/>
      )}
    </div>
  );
}
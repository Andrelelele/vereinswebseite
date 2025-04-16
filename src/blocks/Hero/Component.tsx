import { Page } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>;

export const HeroBlock = ({ block }: { block: HeroProps }) => {
  return (
    <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    }}
    >
      <h1>{block.heading}</h1>
      <p>{block.subheading}</p>
      {typeof block?.image === 'object' && block.image?.url && (
        <Image src={block.image?.url} alt={block.blockType} className={'object-contain'} width={100} height={100} style={{padding: '20px'}}/>
      )}
      <Link href={block.cta_button.url}>{block.cta_button.label}</Link>
    </div>
  );
}
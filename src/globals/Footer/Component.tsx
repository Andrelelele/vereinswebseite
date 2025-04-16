import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'

export default async function Footer() {

  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <div className={'bg-purple-400'}>
      <div className={'flex justify-self-start items-center'}>
        Footer
        {
          typeof footer?.logo === 'object' && footer.logo?.url && (
            <Image
              src={footer.logo?.url}
              alt={footer.logo.alt}
              className={'object-contain'}
              width={200}
              height={200}
            />
          )
        }
      </div>
    </div>
  )
}
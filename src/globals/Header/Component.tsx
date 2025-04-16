import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {

  const payload = await getPayload({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <div className={'bg-purple-400'}>
      <div className={'justify-between w-full'}>
          {typeof header?.logo === 'object' && header.logo?.url && (
            <Image src={header.logo?.url} alt={header.logo.alt} className={'object-contain'} width={200} height={200} />)
          }

          {header.nav.map((item, index) => {
            return (
              <Link key={index} href={item.link!} className={'text-lg mx-4'}>{item.label}</Link>
            )
          })}

      </div>
    </div>
  )
}
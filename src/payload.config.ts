// storage-adapter-import-placeholder
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Header } from '@/globals/Header/config'
import { Footer } from '@/globals/Footer/config'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import Pages from '@/collections/Pages'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    dateFormat: 'dd.MM.yyyy'
  },
  cors: ['https://localhost:3000', process.env.DOMAIN_NAME || ''],
  globals: [Header, Footer],
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        number: true,
        message: true,
      },
      formOverrides: {
        admin: {
          group: 'Forms'
        }
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Forms'
        }
      }
    })
    // storage-adapter-placeholder
  ],
})

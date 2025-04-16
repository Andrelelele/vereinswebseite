import { Block } from 'payload'

export const Form: Block = {
  slug: 'form',
  interfaceName: 'FormBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms'
    },
  ],
}
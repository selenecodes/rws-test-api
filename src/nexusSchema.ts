import { makeSchema } from 'nexus'
import * as types from './graphql'
import { paljs } from '@paljs/nexus'
import { join } from 'path'

export const schema = makeSchema({
  types,
  plugins: [paljs()],
  outputs: {
    schema: join(process.cwd(), 'generated/schema.graphql'),
    typegen: join(process.cwd(), 'generated/nexus.ts'),
  },
  contextType: {
    module: join(process.cwd(), './src/context.ts'),
    export: 'Context',
  },
})

import { type SchemaTypeDefinition } from 'sanity'


import tweets from './schemas/tweets'
import comments from './schemas/comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tweets, comments],
}

import { objectType } from 'nexus'

export const Zipcode = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Zipcode',
  definition(t) {
    t.int('id')
    t.int('postcode')
    t.string('netnummer')
    t.float('latitude')
    t.float('longitude')
    t.string('woonplaats')
    t.string('soort')
    t.string('provincie')
    t.nullable.string('alternatieve_schrijfwijzen')
    t.nullable.string('gemeente')
    t.field('createdAt', { type: 'DateTime' })
  },
})

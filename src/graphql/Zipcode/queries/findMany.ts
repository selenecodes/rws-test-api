import { queryField, nonNull, list } from 'nexus'

export const ZipcodeFindManyQuery = queryField('findManyZipcode', {
  type: nonNull(list(nonNull('Zipcode'))),
  args: {
    where: 'ZipcodeWhereInput',
    orderBy: list('ZipcodeOrderByWithRelationInput'),
    cursor: 'ZipcodeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ZipcodeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.zipcode.findMany({
      ...args,
      ...select,
    })
  },
})

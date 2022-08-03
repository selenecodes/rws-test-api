import { queryField, nonNull, list } from 'nexus'

export const ZipcodeFindCountQuery = queryField('findManyZipcodeCount', {
  type: nonNull('Int'),
  args: {
    where: 'ZipcodeWhereInput',
    orderBy: list('ZipcodeOrderByWithRelationInput'),
    cursor: 'ZipcodeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ZipcodeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.zipcode.count(args as any)
  },
})

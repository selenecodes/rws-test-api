import { queryField, list } from 'nexus'

export const ZipcodeAggregateQuery = queryField('aggregateZipcode', {
  type: 'AggregateZipcode',
  args: {
    where: 'ZipcodeWhereInput',
    orderBy: list('ZipcodeOrderByWithRelationInput'),
    cursor: 'ZipcodeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.zipcode.aggregate({ ...args, ...select }) as any
  },
})

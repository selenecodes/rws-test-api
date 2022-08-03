import { queryField, list } from 'nexus'

export const ZipcodeFindFirstQuery = queryField('findFirstZipcode', {
  type: 'Zipcode',
  args: {
    where: 'ZipcodeWhereInput',
    orderBy: list('ZipcodeOrderByWithRelationInput'),
    cursor: 'ZipcodeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ZipcodeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.zipcode.findFirst({
      ...args,
      ...select,
    })
  },
})

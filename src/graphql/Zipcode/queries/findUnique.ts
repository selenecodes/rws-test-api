import { queryField, nonNull } from 'nexus'

export const ZipcodeFindUniqueQuery = queryField('findUniqueZipcode', {
  type: 'Zipcode',
  args: {
    where: nonNull('ZipcodeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.zipcode.findUnique({
      where,
      ...select,
    })
  },
})

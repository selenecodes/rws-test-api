import { mutationField, nonNull } from 'nexus'

export const ZipcodeUpdateOneMutation = mutationField('updateOneZipcode', {
  type: nonNull('Zipcode'),
  args: {
    data: nonNull('ZipcodeUpdateInput'),
    where: nonNull('ZipcodeWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.zipcode.update({
      where,
      data,
      ...select,
    })
  },
})

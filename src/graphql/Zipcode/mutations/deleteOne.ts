import { mutationField, nonNull } from 'nexus'

export const ZipcodeDeleteOneMutation = mutationField('deleteOneZipcode', {
  type: 'Zipcode',
  args: {
    where: nonNull('ZipcodeWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.zipcode.delete({
      where,
      ...select,
    })
  },
})

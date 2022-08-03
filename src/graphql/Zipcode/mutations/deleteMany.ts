import { mutationField, nonNull } from 'nexus'

export const ZipcodeDeleteManyMutation = mutationField('deleteManyZipcode', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ZipcodeWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.zipcode.deleteMany({ where } as any)
  },
})

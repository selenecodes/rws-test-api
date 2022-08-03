import { mutationField, nonNull } from 'nexus'

export const ZipcodeUpdateManyMutation = mutationField('updateManyZipcode', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ZipcodeUpdateManyMutationInput'),
    where: 'ZipcodeWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.zipcode.updateMany(args as any)
  },
})

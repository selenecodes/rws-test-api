import { mutationField, nonNull } from 'nexus'

export const ZipcodeUpsertOneMutation = mutationField('upsertOneZipcode', {
  type: nonNull('Zipcode'),
  args: {
    where: nonNull('ZipcodeWhereUniqueInput'),
    create: nonNull('ZipcodeCreateInput'),
    update: nonNull('ZipcodeUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.zipcode.upsert({
      ...args,
      ...select,
    })
  },
})

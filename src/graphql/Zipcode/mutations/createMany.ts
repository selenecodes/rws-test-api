import { mutationField, nonNull, list } from 'nexus'

export const ZipcodeCreateManyMutation = mutationField('createManyZipcode', {
  type: nonNull('BatchPayload'),
  args: {
    data: list(nonNull('ZipcodeCreateInput')),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.zipcode.createMany({
      data,
      ...select,
    })
  },
})

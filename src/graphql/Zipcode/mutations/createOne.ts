import { mutationField, nonNull } from 'nexus'

export const ZipcodeCreateOneMutation = mutationField('createOneZipcode', {
  type: nonNull('Zipcode'),
  args: {
    data: nonNull('ZipcodeCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.zipcode.create({
      data,
      ...select,
    })
  },
})

import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'quantityPrize',
    title: 'Quantity Prize',
    type: 'object',
    fields: [
        defineField({
            name: 'range',
            title: 'Quantity Range',
            type: 'string',
            options: {
                list: [
                    { title: '1-11', value: '1-11' },
                    { title: '12-35', value: '12-35' },
                    { title: '36-72', value: '36-72' },
                    { title: '144-287', value: '144-287' },
                    { title: '288+', value: '288+' },
                ],
            },
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
    ],
});
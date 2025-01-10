import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({ name: 'name', title: 'Product Name', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'specifications',
            title: 'Specifications',
            type: 'array',
            of: [{ type: 'specification' }],
        }),
        defineField({
            name: 'variations',
            title: 'Variations',
            type: 'array',
            of: [{ type: 'colorVariation' }],
        }),
    ],
});

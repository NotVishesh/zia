import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'colorVariation',
    title: 'Color Variation',
    type: 'object',
    fields: [
        defineField({ 
            name: 'color', 
            title: 'Color', 
            type: 'color', 
            options: {
                colorList: [
                  '#FF6900',
                  { hex: '#FCB900' },
                  { r: 123, g: 220, b: 181 },
                  { r: 0, g: 208, b: 132, a: 0.5 },
                  { h: 203, s: 95, l: 77, a: 1 },
                  { h: 202, s: 95, l: 46, a: 0.5 },
                  { h: 345, s: 43, v: 97 },
                  { h: 344, s: 91, v: 92, a: 0.5 },
                ]
              }
        }),
        defineField({ 
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required().error('Image is required')
        }),
        defineField({
            name: 'sizeVariations',
            title: 'Size Variations',
            type: 'array',
            of: [{ type: 'sizeVariation' }],
        }),
        defineField({
            name: 'isTranding',
            title: 'Is Tranding',
            type: 'boolean',
            initialValue: false,
        }),
    ],
});
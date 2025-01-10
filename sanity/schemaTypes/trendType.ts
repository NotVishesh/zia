import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'trendType',
    title: 'Trend Type',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // Enables image cropping
            },
            validation: Rule => Rule.required().error('Image is required')
        }),
        defineField({
            name: 'imageName',
            title: 'Image Name',
            type: 'string',
            validation: Rule => Rule.required().error('Image name is required')
        }),
        defineField({
            name: 'startingPrice',
            title: 'Starting Price',
            type: 'number',
            validation: Rule => Rule.required().min(0).error('Starting price must be a positive number')
        })
    ]
});
import {TrolleyIcon} from "@sanity/icons"
import { subtle } from "crypto"
import { title } from "process"
import {defineField, defineType} from 'sanity'
export const productType = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    icon : TrolleyIcon,
    fields: [
        defineField({
            name: 'productID',
            title: 'Product ID',
            type: 'string',
        }),
        defineField({
            name: 'productName',
            title: 'Product Name',
            type: 'string',
            validation: (Rule) => Rule.required(),  
        }),
        defineField({
            name: 'Slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'Image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'stockQuantity',
            title: 'Stock Quantity',
            type: 'number',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        }),
        defineField({
            name: 'dateAdded',
            title: 'Date Added',
            type: 'datetime',
        })
    ],
    preview:{
        select: {
            title   : 'productName',
            media   : 'Image',
            subtitle: 'price',
    },
    prepare(selection){
        return {
            title: selection.title,
            media: selection.media,
            subtitle: `$${selection.subtitle}`,
        }
    }
}
}
);
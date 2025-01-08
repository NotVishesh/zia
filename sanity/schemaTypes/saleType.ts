import { TagIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';


export const saleType = defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
           
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: 'discountAmount',
            title: 'discountAmount',
            type: 'number',
            description : "Amount off in percentage or fixed amount"
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon Code',
            type: 'string',
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            description : "Check to activate the sale",
            initialValue: true,
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        })
    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare(selection) {
            const { title, discountAmount, couponCode, isActive } = selection;
            const status = isActive ? 'Active' : 'Inactive';
            return {
                title: title,
                subtitle: `${discountAmount}% off | ${couponCode} | ${status}`
            }
        }
    }
    
});
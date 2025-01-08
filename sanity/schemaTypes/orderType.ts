import { BasketIcon } from '@sanity/icons';
import {defineField, defineType} from 'sanity'

export const orderType =  defineType({
    name: 'order',
    type: 'document',
    title: 'Order',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stripeCheckoutSessionID',
            title: 'Stripe Checkout Session ID',
            type: 'string'
        }),
        defineField({
            name: 'stripeCustomerID',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),

    ],
    preview: {
        select: {
            title: 'orderNumber',
            subtitle: 'orderDate',
        },
    },
});
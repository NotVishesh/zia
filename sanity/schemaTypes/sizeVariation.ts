import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from 'sanity';
import quantityPrize from "./quantityPrize";

export default defineType({
    name: 'sizeVariation',
    title: 'Size Variation',
    type: 'object',
    fields: [
        defineField({ name: 'size', title: 'Size', type: 'string' }),
        defineField({ name: 'quantity', title: 'Quantity', type: 'array', of: [{ type: 'quantityPrize' }] }),
        defineField({ name: 'stock', title: 'Stock', type: 'number' }),
    ],
});
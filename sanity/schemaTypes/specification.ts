import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from 'sanity';

export default {
    name: 'specification',
    title: 'Specification',
    type: 'object',
    fields: [
      { name: 'key', title: 'Key', type: 'string' },
      { name: 'value', title: 'Value', type: 'string' },
    ],
  };
  
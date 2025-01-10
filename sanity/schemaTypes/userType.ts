import { defineField, defineType } from 'sanity';

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'password',
            title: 'password',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'FirstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'LastName',
            title: 'Last Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'Address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'PhoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'DateCreated',
            title: 'Date Created',
            type: 'datetime',
        }),
        defineField({
            name:'IsAdmin',
            title:'Is Admin',
            type:'boolean',
        }),
        defineField({
            name: 'ForgotPasswordToken',
            title: 'Forgot Password Token',
            type: 'string',
        }),
        defineField({
            name: 'ForgotPasswordTokenExpires',
            title: 'Forgot Password Token Expires',
            type: 'datetime',
        }),
        defineField({
            name: 'VarificationToken',
            title: 'Varification Token',
            type: 'string',
        }),
        defineField({
            name: 'VarificationTokenExpires',
            title: 'Varification Token Expires',
            type: 'datetime',
        }),

    ],
});
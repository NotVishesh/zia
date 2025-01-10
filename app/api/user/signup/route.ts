import {client} from '@/sanity/lib/backendClient'
import {NextRequest, NextResponse} from 'next/server'
import bycryptjs from 'bcryptjs'
import {sendMail} from '@/helpers/mailer'


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const {username, email, password} = data;
        const existingUser = await client.fetch(`*[_type == "username" && email == $email][0]`, { email });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        const salt = await bycryptjs.genSalt(10);
        const hashedPassword = await bycryptjs.hash(password, salt);
        data.password = hashedPassword;
        const createdUser = await client.create({
            _type: 'user',
            ...data
        });
        console.log('working');

        //send varification email
        await sendMail({to: email, emailType: 'varify', userID: createdUser._id});
        return NextResponse.json({ message: 'User created successfully', user: createdUser });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating user', error: (error as any).message }, { status: 500 });
    }
}

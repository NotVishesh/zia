import {client} from '@/sanity/lib/backendClient'
import {NextRequest, NextResponse} from 'next/server'
import bycryptjs from 'bcryptjs'
import {sendMail} from '@/helpers/mailer'


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const {username, email, password} = data;
        
        const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        const result = client.create({
            _type: 'user',
            ...data
        });   
        return NextResponse.json({ message: 'User created successfully', user: result });
        
    } catch (error) {
        return NextResponse.json({ message: 'Error creating user', error: (error as any).message }, { status: 500 });
    }
}
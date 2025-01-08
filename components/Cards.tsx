import Image from 'next/image'
interface CardsProps {
  src: string;
  alt: string;
  text: string;
}

function Cards({ src, alt, text }: CardsProps) {
  return (
    <div className='flex flex-col items-center justify-center border-4 border-gray-200 rounded-lg  pt-3 px-3'>
        <Image src={src} alt={alt} width={300} height={300} className='rounded-sm object-cover h-72 w-96 mx-3' />
        
        <p className='py-4 border-2 my-2  border-black font-sans text-center w-full rounded-sm  hover:bg-black hover:text-white '>{text}</p>
    </div>
  )
}

export default Cards
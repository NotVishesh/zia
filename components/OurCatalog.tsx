import {Button} from '@/components/ui/button'
import Image from 'next/image';
interface OurCatalogProps {
  cataImgSrc: string;
  cataName: string;
}

function OurCatalog({cataImgSrc, cataName }: OurCatalogProps) {
  return (
    <>
    <div className='flex relative'>
        <Image src={cataImgSrc} alt={cataName} className='rounded-lg object-cover h-72 w-72 mx-3' width={1000} height={1000} />
        <p className="absolute z-10 bg-white px-4 py-2 font-serif rounded-md border-2 mt-4 border-black">{cataName}</p>
        
        <Button className='absolute bottom-2 left-1/2 transform -translate-x-1/2 h-12 w-32 justify-center items-center border-white border-2'> Buy Now</Button>
    </div>

    
    </>
  )
}

export default OurCatalog
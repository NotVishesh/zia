import {imgSrcMaker} from "@/utils/imgSrcmaker";
interface TrendingSectionProps {
  trendingSrc: string;
  trendingAlt: string;
  trendingTitle: string;
  startingPrice: number;
}

function TrendingSection({trendingSrc, trendingAlt, trendingTitle, startingPrice}: TrendingSectionProps) {

  const imgSrc = imgSrcMaker(trendingSrc);
  return (
    <>
    <div className="grid-cols-2 md:grid-cols-3  gap-4 py-8 px-20">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <img src={imgSrc} alt={trendingAlt} className="w-full h-64 object-cover rounded-lg"/>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{trendingTitle}</h2>
          <p className="mt-2 text-sm text-gray-500">Starting from Rs {startingPrice}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default TrendingSection
import Image from "next/image";
import animePic from '../public/anime.jpg'

export const AboutMe = () => {
    return (
      <div className="w-10/12 mx-auto mb-10 ">
        <div>
          <p className="text-xl text-center">About me</p>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-2">
              <div className="mt-10 w-10/12">
                <p className=" text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  consequatur expedita cupiditate vel vitae, alias voluptatibus
                  ducimus, nam beatae autem harum odio? Ipsa provident non cum
                  assumenda odio eum veniam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. A magni eveniet ad ipsam
                  temporibus cum quos. Ipsam debitis minima, impedit excepturi
                  adipisci, magni quos, ad nulla exercitationem dolores
                  perspiciatis autem.
                </p>
              </div>
            </div>
            <div className="">
              <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image src={animePic} width={400} height={100} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
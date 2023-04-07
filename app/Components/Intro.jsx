import Link from "next/link";
import Image from "next/image";

import { TbMathGreater } from "react-icons/tb";

export default function Intro() {
  return (
    <div id="intro" className="my-10 py-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl my-3">The next-generation anime platform</h2>
          <h3 className="text-xl mx-auto pb-10 max-w-md">Track, share, and discover your favorite anime and manga with AniList.</h3>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl">
            <div className="flex px-4 my-8">
              <div className="shrink-0">
                <Image alt="icone" src="stats.svg" width={100} height={100} />
              </div>
              <div>
                <h4>Discover your obsessions</h4>
                <p>What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-deph statistics.</p>
              </div>
            </div>
            <div className="flex px-4 my-8">
              <div className="shrink-0">
                <Image alt="icone" src="apps.svg" width={85} height={85} />
              </div>
              <div>
                <h4>Bring AniList anywhere</h4>
                <p>Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.</p>
              </div>
            </div>
            <div className="flex px-4 my-8">
              <div className="shrink-0">
                <Image alt="icone" src="social.svg" width={100} height={100} />
              </div>
              <div>
                <h4>Join the conversation</h4>
                <p>Share your thoughts with our thriving community, make firends, socialize, and receive recommendations.</p>
              </div>
            </div>
            <div className="flex px-4 my-8">
              <div className="shrink-0">
                <Image alt="icone" src="custom.svg" width={90} height={90} />
              </div>
              <div>
                <h4>Tweak it to your liking</h4>
                <p>Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.</p>
              </div>
            </div>
          </div>
        </div>
        <Link href='/sign_up' className="bg-indigo-500 px-8 py-2 rounded-3xl font-bold text-white">Join Now <span className="bg-white text-indigo-500 rounded-2xl">&gt;</span></Link>
    </div>
  )
}

import Link from "next/link";
import { getCards, getHomeConten } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";

export default async function HomePage() {
  type CardData = {
    _id: string;
    title: string;
    description: string;
    link: string;
    cardDate: string;
  };
  const cards: CardData[] = await getCards();
  type HomeContent = {
    _id?: string;
    heroText?: string;
    heroDescription: TypedObject[];
    redirectButton?: string;
    postTitle?: string;
    postsDescription?: string;
  };
  const content: HomeContent = await getHomeConten();
  return (
    <main className=" flex flex-col justify-center items-center text-center space-y-3 pt-40">
      <p className="text-md leading-6 prose uppercase">{content.heroText}</p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
        <Link href={"https://sanity.io/"} className=" text-sanity p-2">
          Sanity
        </Link>{" "}
        <span className="text-gray-500">+</span>{" "}
        <Link href={"https://nextjs.org/"} className="p-2">
          Next.js
        </Link>
      </h1>
      <div className="mt-6 sm:text-lg md:text-xl lg:text-2xl text-gray-700 w-[50%]">
        <PortableText value={content.heroDescription} />
      </div>
      <div className="inline-flex rounded-full shadow-xl md:whitespace-nowrap bg-gray-900 px-4 py-2 lg:pl-6 lg-pr:5 md:py-4 text-white text-sm lg:text-base mt-6 font-mono gap-4 items-center">
        <span className="text-cyan-500 font-bold">npm</span>{" "}
        <span className="text-sanity font-bold">create </span>{" "}
        <span>
          sanity@latest -- --template sanity-io/sanity-template-nextjs-clean
        </span>
        <button>
          <div className="bg-sanity h-3.5 w-3.5 "></div>
        </button>
      </div>
      <Link
        href={"https://www.sanity.io/docs"}
        target="_blank"
        className=" text-red-500 text-xs md:text-sm underline hover:text-gray-900 my-4"
      >
        {content.redirectButton}
      </Link>

      <div className="w-full border-y border-gray-200 p-y-12 sm:py-20 text-left px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {content.postTitle}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {content.postsDescription}
          </p>
          <div className="mt-6 pt-6 space-y-12 border-t border-gray-200 "></div>
        </div>
        <div className="space-y-6">
          {cards.map((card) => (
            <Card
              key={card._id}
              title={card.title}
              description={card.description}
              cardDate={card.cardDate}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export type Cardstype = {
  title: string;
  description: string;
  link: string;
  cardDate: string;
};
export function Card(props: Cardstype) {
  return (
    <Link href={props.link} className="block">
      <div className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white ">
        <div>
          <h3 className="text-2xl font-bold mb-4 leading-tight ">
            {props.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">
            {props.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <p className="flex items-center font-mono">Sanity CMS</p>
          <p className="text-gray-500 text-xs font-mono">{props.cardDate}</p>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";

export type Cardstype = {
  title: string;
  description: string;
  link: string;
  cardDate: string;
};

export default function Card(props: Cardstype) {
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

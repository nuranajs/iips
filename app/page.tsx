import Image from "next/image";
import {client, urlFor} from "./lib/sanity"
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link  from "next/link";


async function getData() {
  const query =`
  *[_type == 'blog'] | order(_createdAt asc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

const data = await client.fetch(query)
return data;
}


export default async function Home() {
  const data: simpleBlogCard [] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
            <Image  src={urlFor(post.titleImage).url()}
            alt="image"
            width={800}
            height={800}
            className="rounded-tl-lg h-[200px] object-cover"/>
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-1 font-bold">{post.title}</h3>
              <p className="text-sm line-clamp-2 mt-2 text-gray-600 dark:text-gray-100">{post.smallDescription}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Selengkapnya</Link>
              </Button>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}

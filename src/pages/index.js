// import Image from "next/image";
import Link from 'next/link';
import { client } from '../../libs/client';
import { Inter } from "next/font/google";
import Image from 'next/image';
import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/Heading';
import Header from '@/components/molecules/Header';
import Copyright from '@/components/atoms/Copyright';

const inter = Inter({ subsets: ["latin"] });

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      <Header/>
      <Heading title='サークル一覧' description='よりキャンパスライフを輝かせるサークル一覧です'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-y-8 gap-x-4 mb-12'>
        {blog.map((blog) => (
          <li key={blog.id} className='list-none w-56'>
            <Link href={`blog/${blog.id}`}>
              <Image src={blog.image.url}
              width={1200}
              height={630}
              alt={blog.title} className='rounded'/>
              <p className='text-sm font-black'>{blog.title}</p>
              <p className='text-sm text-neutral-600'>{blog.publishedAt}</p>
            </Link>
          </li>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button value='もっと見る'/>
      </div>
      <Copyright/>
    </>
  );
}
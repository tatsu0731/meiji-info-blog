// import Image from "next/image";
import Link from 'next/link';
import { client } from '../../libs/client';
import { Inter } from "next/font/google";
import Image from 'next/image';

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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-y-8 gap-x-4'>
      {blog.map((blog) => (
        <li key={blog.id} className='list-none w-40'>
          <Link href={`blog/${blog.id}`}>
            <img src={blog.image.url} alt={blog.title} className='w-60 h-30 rounded'/>
            <p className='text-sm font-black'>{blog.title}</p>
            <p className='text-sm text-neutral-600'>{blog.publishedAt}</p>
          </Link>
        </li>
      ))}
    </div>
  );
}

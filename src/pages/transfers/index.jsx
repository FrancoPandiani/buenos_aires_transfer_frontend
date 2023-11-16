import Head from 'next/head';
import Layout from '@/hocs/Layout';
import { useCallback, useEffect, useState } from 'react';
import FetchBlogPosts from '@/utils/api/blog/List';
import BlogList from './components/TransferBlogList';

const SeoList = {
  title: 'Buenos Aires Transfer',
  description:'transportes vip',
  href: '/',
  url: 'https://buenosairestransfer.com',
  keywords: 'transporte, vip, remises, viajes',
  robots: 'all',
  author: 'Franco',
  publisher: 'Pandiani',
  image:'',
  twitterHandle: '@Buenosairestrasnfer',
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageSize, setMaxPageSize] = useState(100);
  const [filterBy, setFilterBy] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState('-created_at');
  const [searchBy, setSearchBy] = useState('');

  const [loading, setLoading] = useState(false);
  
  const fetchBlogPosts = useCallback(
    async (page) => {
      setLoading(true);
      try {
        const res = await FetchBlogPosts(
          page,
          pageSize,
          maxPageSize,
          filterBy,
          orderBy,
          sortBy,
          searchBy,
        );

        if (res && res.status === 200) {
          console.log(res.data);
          setPosts(res.data.results);
          setCount(res.data.count);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [maxPageSize, filterBy, orderBy, sortBy, pageSize, searchBy],
  );

  useEffect(() => {
    fetchBlogPosts(currentPage);
  }, [fetchBlogPosts, currentPage]);

  return (
    <>
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content={SeoList.image} />
        <meta property="og:type" content="website" />

        <meta property="fb:app_id" content="" />

        {/* Video meta tags */}
        <meta property="og:video" content={SeoList.video} />
        <meta property="og:video:url" content={SeoList.video} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:secure_url" content={SeoList.video} />

        {/* Twitter meta Tags */}
        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <meta name="twitter:player:stream" content={SeoList.video} />
      </Head>
      <div className="dark:bg-dark-bg">
        <BlogList
          posts={posts}
          count={count}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

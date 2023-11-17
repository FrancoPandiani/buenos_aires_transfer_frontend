import Head from 'next/head';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Page Not Found - Buenos Aires Transfer',
  description:'Oops! algo salió mal.. vuelve nuevamente al inicio.',
  href: '/',
  url: 'https://buenosarestransfer.com/404',
  keywords: '404 error, page not found, buenosairestransfer',
  robots: 'noindex, nofollow',
  author: 'Franco',
  publisher: 'Franco',
  image:'',
  twitterHandle: '@buenosairestransfer',
};

export default function NotFound() {
  return (
    <div className="dark:bg-dark-bg">
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content="Buenos Aires Transfer Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="dark:text-dark-txt">NOT FOUND</p>
    </div>
  );
}

NotFound.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

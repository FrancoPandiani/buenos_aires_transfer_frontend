import Head from 'next/head';
import Layout from '@/hocs/Layout';
import Faqs from './components/Faqs';

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

export default function Help() {
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

      <div className=" py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-6xl">
            Help center
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-dark-txt-secondary">
            How may we help you?
          </p>
        </div>
      </div>
      <div className=" px-6  lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Faqs />
        </div>
      </div>
    </div>
  );
}

Help.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
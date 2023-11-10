import Layout from '@/hocs/Layout';
import Head from 'next/head';
import BoomslagLogoKit from './components/BuenosAiresTransferLogoKit';
import Colors from './components/Colors';
import Header from './components/Header';
import PraediumLogoKit from './components/PraediumLogoKit';
import Products from './components/Products';
import UridiumLogoKit from './components/UridiumLogoKit';

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

export default function Press() {
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
        <meta property="og:image:alt" content="Boomslag Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PraediumLogoKit />
      <UridiumLogoKit />
      <BoomslagLogoKit />
      <Colors />
      <Products />
    </div>
  );
}

Press.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
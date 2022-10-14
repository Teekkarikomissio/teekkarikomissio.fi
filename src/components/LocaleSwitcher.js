//   return (
//     <button
//       value={locale === 'sv' ? 'fi' : 'sv'}
//       onClick={handleLocaleChange}
//       className="mt-4 inline-flex text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent hover:text-yellow-400 hover:bg-white lg:mt-0"
//     >
//       {t(locale === 'sv' ? 'fi' : 'sv')}
//     </button>
//   );
// }
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaLanguage } from 'react-icons/fa';
import { Flex } from '@chakra-ui/react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <>
      {otherLocales.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
            <a>
              <Flex justify="space-between" align="center" direction="row">
                <FaLanguage />
                {locale}
              </Flex>
            </a>
          </Link>
        );
      })}
    </>
  );
}

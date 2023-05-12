import Link from "next/link";
import { useRouter } from "next/router";

import { HiOutlineTranslate } from "react-icons/hi";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, asPath, query } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <Link
      href={{ pathname, query }}
      as={asPath}
      locale={otherLocales[0]}
      legacyBehavior
    >
      <button className="btn btn-outline btn-secondary gap-2">
        <HiOutlineTranslate className="h-6 w-6" />
        {otherLocales}
      </button>
    </Link>
  );
}

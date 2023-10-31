import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Root() {
    const [ t, i18n ] = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <>
            <div className="grid min-h-screen grid-rows-[auto_1fr_auto] font-display text-secondary-500 antialiased relative bg-gray-50">
                <header className="bg-emerald-900 text-white">
                    <div className="container mx-auto px-4 py-8 flex items-center justify-between">
                        <Link className="text-xl font-bold uppercase" to={`/`}>{ t('logo') }</Link>
                        <nav>
                            <ul className="flex items-center gap-4 font-bold text-lg">
                                <li>
                                    <Link className="hover:underline" to={`/`}>{ t('home') }</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={`reservations`}>{ t('reservations') }</Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => { i18n.changeLanguage(isArabic ? 'en' : 'ar') }}
                                        className="px-3 py-1 bg-white text-emerald-900 border border-emerald-900 rounded-md capitalize hover:bg-emerald-100 duration-150"
                                    >
                                        { isArabic ? 'en' : 'ع'}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto px-4">
                    <Outlet />
                </main>
                <footer className="border-t border-emerald-300">
                    <div className="container mx-auto px-4 py-6">
                        footer
                    </div>
                </footer>
            </div>
        </>
    );
}

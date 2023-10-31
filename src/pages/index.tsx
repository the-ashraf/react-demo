import { useTranslation } from "react-i18next";
function Index() {
    const [ t ] = useTranslation();
  return (
    <>
        <h1 className="text-3xl font-bold underline text-center mt-10">
            { t('welcome') }
        </h1>

        <p className="text-center mt-2">this is the index route</p>
    </>
  )
}

export default Index

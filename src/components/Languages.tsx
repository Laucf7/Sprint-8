import { useTranslation } from 'react-i18next'
import enFlag from '../img/enFlag.png'
import espFlag from '../img/espFlag.png'
import catFlag from '../img/catFlag.png'

type Locales = {
    [key: string]: {
      flag: string;
      title: string;
    };
  };

const locales: Locales = {
    en: { flag: enFlag, title: 'English' },
    esp: { flag: espFlag, title: 'Espanyol' },
    cat: { flag: catFlag, title: 'Catala' }
}
const Languages: React.FC = () => {
    const { i18n } = useTranslation();
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul className='flex'>
                {Object.keys(locales).map((locale) => (
                    <div key={locale}>
                        <button
                            style={{
                                fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                margin: 2,
                                border: 'none',    
                            }}
                            type="submit"
                            onClick={() => i18n.changeLanguage(locale)}
                        >
                            <img src={locales[locale].flag} alt={locales[locale].title} />
                        </button></div>
                ))}
            </ul>
        </div>
    );
};

export default Languages;



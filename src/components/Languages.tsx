import { useTranslation } from 'react-i18next';

interface LanguagesProps {}

const Languages: React.FC<LanguagesProps> = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end">
      <div className="grid gap-4 grid-cols-3">
        <button onClick={() => changeLanguage('en')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="English Flag" />
            </div>
          </div>
        </button>
        <button onClick={() => changeLanguage('esp')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/750px-Flag_of_Spain_%28Civil%29.svg.png?20110426012613" alt="Spanish Flag" />
            </div>
          </div>
        </button>
        <button onClick={() => changeLanguage('cat')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg" alt="Catalan Flag" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Languages;

/* EL CODI FUNCIONA BE A LOCALEHOST PERO NO QUAN HO PUGEM A VERCEL O NETLIFY
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
                                borderRadius: '50%',
                                overflow: 'hidden',
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


*/
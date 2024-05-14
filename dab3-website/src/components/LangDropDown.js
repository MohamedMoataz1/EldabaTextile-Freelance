import { useTranslation } from "react-i18next";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const LangDropDown = () => {
    const { t, i18n} = useTranslation();
    const langName = {"tr":"Türkçe","en":"English","ar":"العربيه"};
    const [lang, setLang] = useState(langName[`${i18n.language}`]);
    const langs = [{ 'name': 'English', 'code': 'en' }, { 'name': 'العربيه', 'code': 'ar' }, { 'name': 'Türkçe', 'code': 'tr' }];
    const changeLanguage = (lang) => {
        setLang(lang.name);
        i18n.changeLanguage(lang.code);
    }
    return (
        <div className="language-holder">
            <CDropdown>
                <CDropdownToggle style={{"color" : "white"}} color="white">{lang}</CDropdownToggle>

                <CDropdownMenu>
                    {
                        langs.map((lng, i) => (<CDropdownItem key={i} onClick={e => changeLanguage(lng)}>{lng.name}</CDropdownItem>))
                    }
                </CDropdownMenu>
            </CDropdown>

            <FontAwesomeIcon icon={faGlobe} color="white" size="lg" />
        </div>
    );
}

export default LangDropDown;
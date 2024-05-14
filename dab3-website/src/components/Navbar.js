import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/home.css";
const Navbar = forwardRef((props,ref) => {
	const { t, i18n} = useTranslation();
	return (
		<div ref={ref} className="menu">
			<ul>
				<li><a href="/">{t("menu1")}</a></li>
				<li><a href="/Gallery">{t("menu2")}</a></li>
				<li><a href="/Shop">{t("menu3")}</a></li>
				<li><a href="/About">{t("menu4")}</a></li>
				<li><a href="/ContactUs">{t("menu5")}</a></li>
			</ul>
		</div>
	);
})

export default Navbar;
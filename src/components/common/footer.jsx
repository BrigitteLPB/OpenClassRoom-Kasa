import "style/components/common/footer.scss";
import Logo from "components/common/logo";

function Footer(){
	return (
		<footer className="footer">
			<Logo/>
			<p className="text-tertiary-24px-desktop text-tertiary-12px-mobile">© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer;

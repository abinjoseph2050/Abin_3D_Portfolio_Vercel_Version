import { logoIconsList, logoGamesList } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";

const LogoSection = () => {

    const LogoIcon = ({ icon }) => {
        return (
            <div className="flex-none flex-center marquee-counterItems">
                <img src={icon.imgPath} alt={icon.name} />
            </div>
        )
    }

    return (

        <div className="md:my-20 my-10 relative">
            <TitleHeader title={""} sub={"⚙️ Tech I'm familiar with"} />
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={`${icon.name}`} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={`${icon.name}`} icon={icon} />
                    ))}
                </div>
            </div>

            <TitleHeader title={""} sub={"🎮 Games I Love"} />
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-r-box md:gap-12 gap-5">
                    {logoGamesList.map((icon) => (
                        <LogoIcon key={`${icon.name}-3`} icon={icon} />
                    ))}
                    {logoGamesList.map((icon) => (
                        <LogoIcon key={`${icon.name}-4`} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LogoSection

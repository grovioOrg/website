// #region imports
import { navLinks } from "@/data"
import { NavAnimation } from "@/animation"
import { BetaButton } from "@/components/Buttons"

import { Wordmark } from "./Wordmark"
import { MobileMenu } from "./MobileMenu"
// #endregion

const linkClass = `
    px-3 py-1.5 rounded-full text-sm font-medium
    text-grey-300 hover:text-ink hover:bg-grey-50 smooth
`

export const Navbar = () => (
    <NavAnimation>
        <div className="
            relative w-full max-w-7xl flex items-center
            justify-between gap-6 px-6 h-16
            max-mobile:px-4
        ">
            <a
                href="#top"
                aria-label="GORVIO home"
                className="rounded-full"
            >
                <Wordmark size={30} />
            </a>

            <nav
                aria-label="Primary"
                className="flex items-center gap-1 max-tablet:hidden"
            >
                {navLinks.map(({ name, url }) => (
                    <a
                        key={url}
                        href={url}
                        className={linkClass}
                    >
                        {name}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-2">
                <BetaButton
                    size="sm"
                    className="max-mobile:hidden"
                />
                <MobileMenu links={navLinks} />
            </div>
        </div>
    </NavAnimation>
)

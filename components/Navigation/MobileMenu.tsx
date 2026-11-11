"use client"

// #region imports
import { useState } from "react"
import {
    AnimatePresence,
    motion
} from "framer-motion"

import { ILink } from "@/data"
import { BetaButton } from "@/components/Buttons"
// #endregion

export const MobileMenu = ({
    links,
}: {
    links: ILink[]
}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="tablet:hidden">
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="
                    relative grid place-items-center size-10 rounded-full
                    hover:bg-grey-50 cursor-pointer
                "
            >
                <span className="relative block w-4.5 h-3">
                    <span className={`absolute left-0 h-0.5 w-full bg-ink rounded smooth ${open ? "top-1.25 rotate-45" : "top-0"}`} />
                    <span className={`absolute left-0 h-0.5 w-full bg-ink rounded smooth ${open ? "top-1.25 -rotate-45" : "top-2.5"}`} />
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="
                            absolute top-full inset-x-3 mt-2 p-3 rounded-2xl
                            bg-white shadow-lift ring-1 ring-grey-100
                            flex flex-col gap-1
                        "
                    >
                        {links.map(({ name, url }) => (
                            <a
                                key={url}
                                href={url}
                                onClick={() => setOpen(false)}
                                className="px-3 py-2.5 rounded-xl text-base font-medium hover:bg-grey-50"
                            >
                                {name}
                            </a>
                        ))}
                        <BetaButton
                            fullWidth
                            className="mt-2"
                            onClickCapture={() => setOpen(false)}
                        />
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}

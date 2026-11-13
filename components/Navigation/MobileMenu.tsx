"use client"

// #region imports
import { useState } from "react"
import {
    AnimatePresence,
    motion
} from "framer-motion"

import type { IDropdownColumn } from "@/base"
import { ILink } from "@/data/links"
import { useDictionary } from "@/context"
import { cn } from "@/utils"
import { BetaButton } from "@/components/Buttons"

import { LanguageSwitcher } from "./LanguageSwitcher"
// #endregion

export const MobileMenu = ({
    links,
    groups,
}: {
    links: ILink[]
    groups: { title: string, columns: IDropdownColumn[] }[]
}) => {
    const { common } = useDictionary()
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)

    return (
        <div className="tablet:hidden">
            <button
                type="button"
                aria-label={open ? common.nav.closeMenu : common.nav.openMenu}
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
                            flex flex-col gap-1 max-h-[calc(100dvh-6rem)] overflow-y-auto
                        "
                    >
                        {groups.map(({ title, columns }) => {
                            const isOpen = expanded === title

                            return (
                                <div key={title}>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setExpanded(isOpen ? null : title)}
                                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium hover:bg-grey-50 cursor-pointer"
                                    >
                                        {title}
                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.8}
                                            strokeLinecap="round"
                                            aria-hidden
                                            className={cn("smooth text-grey-200", isOpen && "rotate-180")}
                                        >
                                            <path d="M4 6l4 4 4-4" />
                                        </svg>
                                    </button>

                                    {isOpen && (
                                        <ul className="flex flex-col pb-2">
                                            {columns.flatMap(column => column.items).map(item => (
                                                <li key={item.href}>
                                                    <a
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-grey-50"
                                                    >
                                                        {item.icon}
                                                        <span className="flex items-center gap-2 font-medium">
                                                            {item.title}
                                                            {item.badge}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )
                        })}

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

                        <div className="flex flex-col gap-3 mt-2 pt-3 border-t border-grey-100">
                            <LanguageSwitcher inline />
                            <BetaButton
                                fullWidth
                                onClickCapture={() => setOpen(false)}
                            />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}

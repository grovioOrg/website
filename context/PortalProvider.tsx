"use client"

import {
    createContext,
    useContext,
    useState,
} from "react"

import { createPortal } from "react-dom"

interface IPortalContext {
    root: HTMLDivElement | null
}

const PortalContext =
    createContext<
        IPortalContext | null
    >(null)

export interface IPortalProvider {
    children: React.ReactNode
}

export const PortalProvider = ({
    children,
}: IPortalProvider) => {
    const [root, setRoot] =
        useState<HTMLDivElement | null>(null)

    return (
        <PortalContext.Provider
            value={{ root }}
        >
            {children}

            <div
                ref={setRoot}
            />
        </PortalContext.Provider>
    )
}

export interface IPortal {
    children: React.ReactNode
}

export const Portal = ({
    children,
}: IPortal) => {
    const context = useContext(
        PortalContext
    )

    if (!context?.root)
        return null

    return createPortal(
        children,
        context.root
    )
}

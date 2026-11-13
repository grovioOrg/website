"use client"

// #region imports
import {
    createContext,
    useContext
} from "react"

import type {
    IDictionary,
    ILocale
} from "@/dictionaries"
// #endregion

export interface ISharedDictionary {
    lang: ILocale
    common: IDictionary["common"]
    beta: IDictionary["beta"]
}

const DictionaryContext = createContext<ISharedDictionary | null>(null)

export const DictionaryProvider = ({
    value,
    children,
}: {
    value: ISharedDictionary
    children: React.ReactNode
}) => (
    <DictionaryContext.Provider value={value}>
        {children}
    </DictionaryContext.Provider>
)

export const useDictionary = () => {
    const context = useContext(DictionaryContext)

    if (!context)
        throw new Error("useDictionary must be used within DictionaryProvider")

    return context
}

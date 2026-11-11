export type IClassValue = string | number | boolean | undefined | null | IClassValue[]

export const cn = (...inputs: IClassValue[]): string => {
  return inputs
    .flat()
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
}

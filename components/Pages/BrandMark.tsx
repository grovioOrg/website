// #region imports
import { BRAND_PATHS, IBrandGlyph } from "@/icons/brands"
import { IToolId, TOOLS } from "@/data/integrations"
import { cn } from "@/utils"
// #endregion

const BrandSvg = ({ mark, size }: { mark: IBrandGlyph, size: number }) => {
    const viewBox = mark.viewBox ?? "0 0 24 24"
    const dim = size / 2

    if (mark.paths?.length) {
        return (
            <svg viewBox={viewBox} width={dim} height={dim} aria-hidden>
                {mark.paths.map(layer => (
                    <path key={layer.d.slice(0, 24)} d={layer.d} fill={layer.fill} />
                ))}
            </svg>
        )
    }

    if (mark.strokes?.length) {
        const stroke = mark.strokeWidth ?? 2

        return (
            <svg viewBox="0 0 24 24" width={dim} height={dim} fill="none" aria-hidden>
                {mark.strokes.map(path => (
                    <path
                        key={path.slice(0, 24)}
                        d={path}
                        stroke={mark.hex}
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ))}
            </svg>
        )
    }

    return (
        <svg viewBox={viewBox} width={dim} height={dim} fill={mark.hex} aria-hidden>
            <path d={mark.path!} />
        </svg>
    )
}

export const BrandMark = ({
    tool,
    size = 36,
    className = "",
}: {
    tool: IToolId
    size?: number
    className?: string
}) => {
    const mark = BRAND_PATHS[TOOLS[tool].brand]

    return (
        <span
            className={cn("grid place-items-center shrink-0 rounded-xl bg-white ring-1 ring-ink/8", className)}
            style={{ width: size, height: size }}
        >
            <BrandSvg mark={mark} size={size} />
        </span>
    )
}

export const ToolChip = ({ tool, name }: { tool: IToolId, name?: string }) => (
    <li className="flex items-center gap-2.5 rounded-2xl bg-paper ring-1 ring-ink/5 pl-1.5 pr-3.5 py-1.5">
        <BrandMark tool={tool} />
        <span className="text-sm font-medium">{name ?? TOOLS[tool].name}</span>
    </li>
)

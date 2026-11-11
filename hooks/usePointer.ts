"use client"

// #region Imports
import {
	useEffect
} from "react"

import {
	useMotionValue,
	type MotionValue
} from "framer-motion"
// #endregion

/** Pointer position relative to the viewport centre, from -1 to 1 on each axis. */
export const usePointer = (
	enabled = true
): {
	x: MotionValue<number>
	y: MotionValue<number>
} => {
	const x = useMotionValue(0)
	const y = useMotionValue(0)

	useEffect(() => {
		if (!enabled)
			return

		const handler = (event: PointerEvent) => {
			x.set((event.clientX / window.innerWidth) * 2 - 1)
			y.set((event.clientY / window.innerHeight) * 2 - 1)
		}

		window.addEventListener("pointermove", handler, { passive: true })

		return () => window.removeEventListener("pointermove", handler)
	}, [enabled, x, y])

	return { x, y }
}

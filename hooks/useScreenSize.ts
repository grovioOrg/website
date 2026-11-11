"use client"

// #region Imports
import {
	useEffect,
	useState
} from "react"
// #endregion

export const useScreenSize = () => {

	const [size, setSize] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	})

	useEffect(() => {
		const update = () => {
			const width = window.innerWidth

			setSize({
				isMobile: width <= 640,
				isTablet: width > 640 && width <= 1030,
				isDesktop: width > 1030,
			})
		}

		update()

		window.addEventListener(
			"resize",
			update
		)

		return () => window.removeEventListener(
			"resize",
			update
		)
	}, [])

	return size
}

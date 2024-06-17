/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,htm,js}"],
	theme: {
		container: {
			padding: 'var(--container-gap)',
			center: true,
		},
		spacing: {
			0: '0',
			'2': '.02rem',
			'4': '.04rem',
			'6': '.06rem',
			'8': '.08rem',
			'10': '.1rem',
			'12': '.12rem',
			'14': '.14rem',
			'16': '.16rem',
			'20': '.2rem',
			'24': '.24rem',
			'32': '.32rem',
			'48': '.48rem',
			'64': '.64rem',
			'100': '1rem',
			'210': '2.1rem',
			// 'auto': 'auto',
		},
		borderWidth: {
			DEFAULT: '1px',
			2: '2px'
		},
		extend: {



			fontSize: {
				's': 'var(--txt-s)',
				'm': 'var(--txt-m)',
				'l': 'var(--txt-l)',
				'icon-l': 'var(--txt-icon-l)',
				'icon-m': 'var(--txt-icon-m)',
				'icon-s': 'var(--txt-icon-s)',
			},
			fontFamily: {
				'main': ['var(--font-family)'],
			},

			lineHeight: {

			},
			colors: {
				black: 'var(--black)',
				white: 'var(--white)',
				red: 'var(--red)',
				'light-red': 'var(--light-red)',
				'dark-grey': 'var(--dark-grey)',
				grey: 'var(--grey)',
				'light-grey': 'var(--light-grey)',
				'btn-red': 'var(--btn-red)',
				'btn-light-red': 'var(--btn-light-red)',
			},
			borderRadius: {
				DEFAULT: '50%',
			},
			transitionProperty: {
				'left': 'left',
				'right': 'right',
				'border': 'border'
			},
			grayscale: {
				50: '50%',
			},
			screens: {
				'tablet': '576.1px',
				'laptop': '992.1px',

			 },
		}
	},
	plugins: [],
}
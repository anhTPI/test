/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'xl': '1440px'
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    keyframes: {
		  loading:{
			  '0%':{
				  transform:'rotateX(0) rotateY(0) rotateY(0)'
			  },
			  '33%':{
				  transform:'rotateX(180deg) rotateY(0) rotateY(0)'
			  },
			  '57%':{
				  transform:'rotateX(180deg) rotateY(180deg) rotateY(0)'
			  },
			  '100%':{
				  transform:'rotateX(180deg) rotateY(180deg) rotateY(180deg)'
			  },
		  },
		  loading360:{
			  '0%':{
				  transform: 'rotateY(0deg)'
			  },
			  '33%':{
				  transform:'rotateY(120deg)'
			  },
			  '57%':{
				  transform:'rotateY(240deg)'
			  },
			  '100%':{
				  transform:'rotateY(360deg)'
			  },
		  }
		},
		animation: {
		  loading: 'loading 2s ease-in-out infinite',
		  loading360: 'loading360 2s linear infinite',
		},
    extend: {
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '42px',
        '7xl': '46px',
        '8xl': '54px',
        '9xl': '80px',
      },
      colors: {
        gray: {
          '100': '#b4b4b4',
          '300': '#888c8f',
          '400': '#6A6E70',
          '600': '#4d4d4d',
          '700': '#445761',
          '900': '#1a1a1a',
          'bg': '#eceef1',
          'br': '#f2f2f2'
        },
        green: {
          '500': '#38a143'
        },
        lime: {
          '50': '#f6fde6',
          '400': '#dbfa9e'
        },

      },
      maxWidth: {
        'max-w-screen-xl': '1440px',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '90%': '90%'
      },
      boxShadow: {
        'custom-bg': '0 0 4px rgba(0, 0, 0, 0.2)',
        'custom-high': '0 3px 20px rgba(0, 0, 0, 0.16)',
        'custom-low': '0 3px 40px rgba(0, 0, 0, 0.1)',
        'custom-black': '0 -1px 0 rgba(77, 77, 77, 1)'
      },
    backgroundPosition: {
      top: 'top',
      'top-4': 'center top 3rem',
      'top-9': 'center top 9rem',
      'top-20': 'center top 20rem',
      'left-20': '-20rem',
      'left-15': '-15rem',
      'bottom-4': 'center bottom 1rem',
    }
    },
  },
  plugins: [],
}

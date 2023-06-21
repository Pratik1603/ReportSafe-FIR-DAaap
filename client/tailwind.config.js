/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'nfull': '90%',
      },
      keyframes: {
        wipe_enter: {
          '0%': { opacity:'0.5' ,transform:'scale(0.5)'},
          '100%': { opacity:'1',transform:'scale(1)'},
         
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
        },
        move_left: {
          '0%': {opacity:'0.5', transform: 'translateX(20vw)' },
          '100%': {opacity:'1',transform: 'translateX(0vw)' },
         
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
        },
        move_right: {
          '0%': {opacity:'0.5', transform: 'translateX(-20vw  )' },
          '100%': {opacity:'1',transform: 'translateX(0vw)' },
         
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
        },
        move_drawer_left: {
          '0%': {display:"block ",opacity:'0', width:'0'},
          '25%': {display:"block",opacity:'0',width:'25'},
          '50%': {display:"block",opacity:'0.1',width:'50'},
          '75%': {display:"block",opacity:'0.2',width:'75'},
          '1005': {display:"block",opacity:'1',width:'100'},
         
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
        },
        move_drawer_right: {
          '0%': {opacity:'1', width:'100'},
          '100%': {opacity:'0',width:'0'},
         
          // '40%': { transform: 'rotate(-4deg)' },
          // '50%': { transform: 'rotate(10.0deg)' },
          // '60%': { transform: 'rotate(0.0deg)' },
          // '100%': { transform: 'rotate(0.0deg)' },
        },
       
      },
      animation: {
        'waving-hand': 'wipe_enter 1s linear',
        'swipe-left':'move_left 0.7s linear',
        'swipe-drawer-left':'move_drawer_left 0.7s linear',
        'swipe-drawer-right':'move_drawer_right 0.7s linear',
        'swipe-right':'move_right 0.7s linear',
       
      },
    },
  },
  plugins: [],
}


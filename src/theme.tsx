import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
  styles: {
    global: {
      "hmtl, body": {
        bg: "#222",
        color: "#fff",
      },
    },
  },
})

export default theme

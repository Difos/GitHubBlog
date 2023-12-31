import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Blog } from './pages/Blog'
import { BlogProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogProvider>
        <Blog />
      </BlogProvider>
    </ThemeProvider>
  )
}

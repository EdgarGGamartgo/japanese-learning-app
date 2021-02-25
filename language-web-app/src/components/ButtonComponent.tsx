import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button, ButtonTheme } from './../styles'

export const ButtonComponent = () => {
    return (
      <div>
        <Button>Normal</Button>

        <ThemeProvider theme={ButtonTheme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    )
}


import {colors} from '@j040v1t0r-bookwise-ui/tokens';
import {getContrast} from 'polished'

export function ColorsGrid() {
  function validateColor(value: string) {
    const colorRegex = /^#([0-9a-fA-F]{3}){1,2}$/
    const isValidColor = colorRegex.test(value)

    if(!isValidColor) {
      return '#FFF'
    }

    return value
  }

  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(validateColor(color), '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}

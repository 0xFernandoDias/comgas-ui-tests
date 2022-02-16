import React from 'react'
import { Icon } from '@chakra-ui/react'

export interface iStatusbar {
  step: number
}

const styles = {
  s0: { fill: '#f2f2f2' },
  s1: { fill: '#71c82d' },
  s2: { fill: '#ffffff', stroke: '#71c82d', strokeWidth: 3 },
  s3: { fill: '#ffffff', stroke: '#f2f2f2', strokeWidth: 3 },
}

const { s0, s1, s2, s3 } = styles

export const Statusbar: React.FC<iStatusbar> = ({ step }) => {
  return (
    <Icon viewBox="0 0">
      {step === 1 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h26c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-26c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 2 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h82c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-82c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 3 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h134c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-134c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 4 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h166c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-166c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 5 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h181c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-181c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 6 ? (
        <>
          <path
            id="Layer"
            style={s0}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h288c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-288c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s3}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : step === 7 ? (
        <>
          <path
            id="Layer"
            style={s1}
            d="m0 5.5c0-0.8 0.7-1.5 1.5-1.5h324c0.8 0 1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5h-324c-0.8 0-1.5-0.7-1.5-1.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m5 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer"
            style={s2}
            d="m164 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
          <path
            id="Layer copy"
            style={s2}
            d="m322 8.5c-1.9 0-3.5-1.6-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5c1.9 0 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5z"
          />
        </>
      ) : (
        step
      )}
    </Icon>
  )
}

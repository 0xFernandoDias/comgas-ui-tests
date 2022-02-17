import React from 'react'
import { Icon } from '@chakra-ui/react'

const styles = {
  s0: { fill: '#f2f2f2' },
  s1: { fill: '#71c82d' },
  s2: { fill: '#ffffff', stroke: '#71c82d', strokeWidth: 3 },
  s3: { fill: '#ffffff', stroke: '#f2f2f2', strokeWidth: 3 },
}

const { s0, s1, s2, s3 } = styles

export const Step1: React.FC = () => {
  return (
    <Icon viewBox="0 0">
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
    </Icon>
  )
}

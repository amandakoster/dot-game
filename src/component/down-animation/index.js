import React from 'react'
import ReactAnimations from 'react-animations'
import { slideInDown } from 'react-animations'


const slideInDown: Animation = {
  from: {
    transform: translate3d(0, '-100%', 0),
    visibility: 'visible'
  },
  to: {
    transform: translate3d(0, 0, 0)
  }
};

export default slideInDown;

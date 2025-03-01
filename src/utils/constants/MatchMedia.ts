import pxToRem from '@/utils/helpers/pxToRem'

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`),
}

export default MatchMedia
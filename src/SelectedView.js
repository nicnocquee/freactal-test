import React from 'react'
import {provideState, injectState, softUpdate} from 'freactal'

export const SelectedView = ({state}) => {
  return (
    <div>
      <p>
        Selected in SelectedView.js = {state.item}
      </p>
    </div>
  )
}

const withState = provideState({
  initialState: (props) => ({
    item: props.item
  })
})

export default withState(injectState(SelectedView))
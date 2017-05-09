import React from 'react';
import {provideState, injectState, softUpdate} from 'freactal'

import SelectedView from './SelectedView'

const App = ({state, effects}) => {
  const buttons = ['one', 'two', 'three'].map(but => <div key={but}><a href="#" onClick={() => {effects.setSelected(but)}}>{`Button ${but}`}</a></div>)
  return (
    <div>
      {buttons}
      <p>Selected in App.js: {state.selected}</p>
      {state.selected ? <SelectedView item={state.selected} /> : null}
    </div>
  )
}

const withState = provideState({
  initialState: () => ({
    selected: null
  }),
  effects: {
    setSelected: softUpdate((state, selected) => ({selected}))
  }
})

export default withState(injectState(App))

Demo:

![](https://d2ppvlu71ri8gs.cloudfront.net/items/3u3k1R1k1b1w1Q2b2Y42/freactal-demo.gif)

Problem:

Children state is not updated when parent passes new props.

Parent (App.js): 

```javascript
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
```

Children (SelectedView.js):

```javascript
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
```

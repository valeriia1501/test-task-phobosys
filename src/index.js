import ReactDOM from 'react-dom'
import routing from '@/routing'

routing.init({
  render: (component) => {
    ReactDOM.render(
      component,
      document.getElementById('root')
    )
  }
})


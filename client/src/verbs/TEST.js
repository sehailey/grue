const TEST = props => {
  console.log('I am the test verb! the input was', props)
  console.log("And now I'm going to test out clearing the command!")
  props.clearCommand()
}

export default TEST

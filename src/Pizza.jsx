export const Pizza = (props) => {
  return (
    <div className='pizza'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  return( 
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

// const headingStyle = {
//     color: 'blue'
// }

export default Header;

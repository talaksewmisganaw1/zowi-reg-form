import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Searchbar({handleSearch, searchValue}) {

  return (
    <div className='search-bar'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" className="search-bar-input" value={searchValue} name="search" onChange={handleSearch} placeholder='ስም/ስልክ ቁጥር'/>
    </div>
  )
}

export default Searchbar

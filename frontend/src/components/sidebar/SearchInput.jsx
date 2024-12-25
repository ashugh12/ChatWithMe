import {IoSearchSharp} from 'react-icons/io5'
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2"> 
        <input type="text" placeholder="Serch..." className="input input-bordered w-full"/>
        <button type='submit' className="btn btn-circle bg-indigo-500 text-white">
            <IoSearchSharp/>
        </button>
    </form>
  )
}

export default SearchInput

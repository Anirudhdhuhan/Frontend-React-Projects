export default function Dropdown({ussers, handleUser}){
    return (
        <>      
          <label
        htmlFor="user"
       className="mr-3 mt-1 "
      >
        Choose a user : <span style={{marginLeft:"5px"}}></span>
      </label>

      <select id="user" name="user" onChange={handleUser} value={ussers} className="hover:bg-gray-200 hover:shadow-lg shadow-md bg-white mr-3 rounded-md p-1 pr-2 pl-2">
        <option value="--">Select User</option>
        <option value="Nilesh">Nilesh</option>
        <option value="Yash">Yash</option>
        <option value="Manish">Manish</option>
        <option value="Rhythm">Rhythm</option>
      </select>
      </>

    )
}
const { AuthContext } = require('@providers/AuthProvider')
const { useContext } = require('react')

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
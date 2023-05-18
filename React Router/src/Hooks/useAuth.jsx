import React from 'react'

const useAuth = () => {
    const isAuth = JSON.stringify(localStorage.getItem("isAuth"))
  return isAuth
}

export default useAuth
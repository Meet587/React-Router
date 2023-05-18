import React from 'react'

const useAuth = () => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))
  return isAuth
}

export default useAuth
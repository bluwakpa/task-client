import React from 'react'

export default React.createContext({
  categories: [],
  tasks: [],
  addTask: () => {},
  editTask: () => {},
  addCategory: () => {},
  editCategory: () => {},
})
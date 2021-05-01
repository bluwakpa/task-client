import React from 'react'

export default React.createContext({
  categories: [],
  tasks: [],
  addCategory: () => {},
  addTask: () => {},
  editCategory: () => {},
  editTask: () => {},
})
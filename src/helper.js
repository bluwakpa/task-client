 // const init = {
  //   categoryName: "",
  //   taskContent: "",
  // }
  // const [formData, setFormData] = useState(init)
  // const [categoryData, setCategoryData] = useState(init)
  // const [taskData, setTaskData] = useState(init)

  // const handleChangeCategory = (e) => {
  //   setCategoryData({
  //     ...categoryData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleChangeTask = (e) => {
  //   setTaskData({
  //     ...taskData,
  //     [e.target.content]: e.target.value
  //   })
  // }

  // const handleClickDelete = (e) => {
  //   e.preventDefault()
  //   const tasks = props.match.params.id
  // }

  // const onSubmitCategory = (e) => {
  //   e.preventDefault()
  //   const newCategory = {
  //     name: formData.name,
  //     id: uuidv4(),
  //   }
  //   context.setCategories([...context.categories, newCategory])
  // }

  // const onSubmitTask = (e) => {
  //   e.preventDefault()
  //   const newTask = {
  //     content: formData.content,
  //     id: uuidv4(),
  //   }
  //   context.setTasks([...context.tasks, newTask])
  // }

  // const handleClickDeleteCategory = (e) => {
  //   e.preventDefault()
  //   const id = props.match.params.id
  //   let deleted = context.categories.filter(category => category.id !== id)
  //   setCategories(deleted)
  // }

  // const handleClickDeleteTask = (e) => {
  //   e.preventDefault()
  //   const id = props.match.params.id
  //   let deleted = context.tasks.filter(task => task.id !== id)
  //   setTasks(deleted)
  // }

  // const value = {
  //   categories,
  //   setCategories,
  //   tasks,
  //   setTasks,
  //   handleClickDelete
  // }
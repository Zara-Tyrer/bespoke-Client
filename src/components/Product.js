import react from 'react'

const Product = (history, showControls) => {
  const {store, dispatch} = useGlobalState()
  const {products} = store
}










return (
  <div>
  {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  <BlogLink to={`/posts/${post._id}`} >
  <PostTitle>{title}</PostTitle>
  <p>{username}</p>

  <p>{category}</p>
  <p>{content}</p>
  {showControls && allowEditDelete && (
  <div>
  <Button onClick={handleDelete}>Delete</Button>
  <Button onClick={handleEdit}>Edit</Button>
  </div>
  )}
  </BlogLink>
  </div>
  )
  }
  

export default Product
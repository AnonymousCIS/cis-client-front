import BoardFormController from '../../controllers/BoardFormController'

const EditPage = async ({ params }) => {
  const { seq } = await params
  return <BoardFormController seq={seq} />
}

export default EditPage

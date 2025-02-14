import BoardFormController from '../../controllers/BoardFormController'

const EditPage = async ({ params }) => {
  console.log('안녕')
  const { seq } = await params
  return <BoardFormController seq={seq} />
}

export default EditPage

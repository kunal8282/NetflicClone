import CardComponent from './CardComponent'
import PropTypes from 'prop-types'

const CardList = ({data}) => {
  return (
    <div className='flex w-full gap-5 py-2 flex-wrap'>
        {data &&
          data?.map((items) => <CardComponent key={items.id} {...items} />)}
    </div>
  )
}

CardList.propTypes = {
    data: PropTypes.array
}


export default CardList
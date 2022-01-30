import './Cardlist.Component.css'
import Card from '../Card/Card.Component'
const Cardlist = (props)  => {
    
    const {monsters} = props
   return(
       <div className='Card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }
       </div>
   )
}

export default Cardlist
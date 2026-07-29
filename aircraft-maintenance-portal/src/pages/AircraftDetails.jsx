import { useParams } from 'react-router-dom'

function AircraftDetails(props) { 
    const {id} = useParams()
    return <h1>Aircraft Details and {id}</h1>
}
export default AircraftDetails
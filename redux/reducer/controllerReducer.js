
import { MY_CONTROLLERS } from "../../components/Home/my_controllers";

const initialValue = MY_CONTROLLERS[0]


// const [selectedController, setSelectedController] = React.useState()

const controller_reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "SELECT_CONTROLLER": 
        const { data, style } = action.payload;
        return {
            set_controller: data,
            style: style,
            newState: true,   
        }
        default:
        return state
    }
}

export default controller_reducer
import { useLocation, useHistory } from "react-router-dom"

function useNavigation() {
    const history = useHistory()
    const location = useLocation()

    const pop = () => {
        history.goBack()
    }

    const push = path => {
        history.push(path)
    }

    return { location, pop, push }
}

export default useNavigation

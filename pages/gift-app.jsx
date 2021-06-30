import { giftService } from '../services/gift-service.js'
import { GiftList } from '../cmps/gift-app/GiftList.jsx'

export class GiftApp extends React.Component {

    state = {
        gifts: [],
    }


    componentDidMount() {
        const gifts = giftService.query()
        this.setState({ gifts })
        console.log('gifts:', gifts);
    }

    render() {
        const { gifts } = this.state
        return (
            <section className="gift-app">
                <h2>My gifts</h2>
                <section className="gift-list">
                    <GiftList gifts={gifts} />
                </section>


            </section>
        )
    }
}
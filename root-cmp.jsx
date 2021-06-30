import { Home } from './pages/home.jsx'
import { GiftApp } from './pages/gift-app.jsx'

// Simple React Component
export class App extends React.Component {

    state = {
        currPage: 'home',
        // color: 'clicked'
    }

    render() {
        return <section className="app">
            <h1>Welcome to my birthday app 🥳</h1>
            <nav className="navbar flex justify-center">
                <ul className="clean-list">
                    <li onClick={() => this.setState({ currPage: 'home' })} className={this.state.color}>
                        Home
                    </li>
                    <li onClick={() => this.setState({ currPage: 'gift' })} className={this.state.color}>
                        Gifts
                    </li>
                </ul>
            </nav>

            {this.state.currPage === 'home' && <Home />}
            {this.state.currPage === 'gift' && <GiftApp />}
        </section>
    }
}



// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }


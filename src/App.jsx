import styles from "./style"
import { Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer, Navbar, Hero} from './components/index'

const App = () => (
   <div className="bg-primary ">

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <Navbar />
    </div>

    <div className="hero">
      <Hero />
    </div>

    <div className="stats">
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials/>
      <Clients />
      <CTA />
      <Footer/>
    
    </div>

   </div>
  )

export default App
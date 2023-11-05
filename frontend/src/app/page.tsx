import Header from '../components/Header'
import PasswordDisplay from '../components/PasswordDisplay'
import ActionButtons from '../components/ActionButtons'
import CreatePwdBtn from '../components/CreatePwdBtn'

const Home: React.FC = async () => (
  <div className="bg-slate-900 text-white sm:w-screen h-screen flex justify-center items-center">
    <div className="bg-slate-950 w-screen sm:w-3/4 h-screen p-5 flex flex-col justify-center items-center gap-10 rounded-md">

      <Header />
      <PasswordDisplay />
      <ActionButtons />
      <CreatePwdBtn />
      
    </div>
  </div>
)

export default Home
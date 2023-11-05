import Header from '../components/Header'
import PasswordDisplay from '../components/PasswordDisplay'
import ActionButtons from '../components/ActionButtons'

const Home: React.FC = async () => (
  <div className="bg-slate-900 text-white sm:w-screen h-screen flex justify-center items-center">
    <div className="bg-slate-950 w-screen sm:w-3/4 h-screen p-5 flex flex-col justify-center items-center gap-10 rounded-md">

      <Header />
      <PasswordDisplay />
      <ActionButtons />

      {/*  Create Password Button */}
      <section className="w-auto sm:w-96 flex justify-center sm:justify-end">
        <button type="button" className="bg-violet-800 w-max p-4 rounded-2xl text-lg hover:bg-violet-900">
          Create Password
        </button>
      </section>
    </div>
  </div>
)

export default Home
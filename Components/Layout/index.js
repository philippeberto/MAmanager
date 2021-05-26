import Header from '../Header/index'
import Sidebar from '../Sidebar/index'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />


        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container float-right px-6 py-8 w-4/5">
              {children}
            </div>
          </main>
        </div>
      </div >
    </div>
  )
}

export default Layout
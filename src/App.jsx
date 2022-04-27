import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import DepartmentForm from './pages/DepartmentForm'
import DepartmentList from './pages/DepartmentList'
import EmployeeForm from './pages/EmployeeForm'
import EmployeeList from './pages/EmployeeList'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/departments/form" element={<DepartmentForm />}/>
          <Route path="/departments/list" element={<DepartmentList />}/>
          <Route path="/employees/form" element={<EmployeeForm />}/>
          <Route path="/employees/list" element={<EmployeeList />}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;

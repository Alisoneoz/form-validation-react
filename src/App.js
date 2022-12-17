import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen ">
      <form>
        <FormInput  placeholder='Username'/>
        <FormInput  placeholder='youremail@company.com'/>
        <FormInput  placeholder='Full Name'/>
        <FormInput  placeholder='argo mais'/>

      </form>
    </div>
  );
}

export default App;

import "./global.css";
import PageTitle from "./components/PageTitle";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="container bg-gray-100 mx-auto flex flex-col justify-center items-center min-h-screen">
      <PageTitle title="Favourite Contacts"/>
      <ContactList />

    </div>
  );
}

export default App;

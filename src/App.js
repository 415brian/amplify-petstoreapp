import { useState } from "react";
import "./App.css";
import { Pets } from "./ui-components";
import { NavBar } from "./ui-components";
import { Footer } from "./ui-components";
import { AddPet } from "./ui-components";
import { PetDetails } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  //authenticator is a high-order function
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField29766925: {
      placeholder: about,
    },
    TextField29766926: {
      placeholder: color,
    },
    TextField29766927: {
      placeholder: image,
    },
    image: {
      src:
        updatePet == null
          ? "https://cdn.pixabay.com/photo/2017/09/29/11/57/dog-2798805_1280.png"
          : updatePet.image,
    },

    Button36622705: {
      isDisabled: !updatePet ? true : false,
    },

    Button29766926: {
      isDisabled: updatePet ? true : false,
    },

    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => setShowForm(false),
    },
  };
  const navbarOverrides = {
    image: {
      src: user?.attributes?.profile,
      // src: "https://d29fhpw069ctt2.cloudfront.net/icon/image/39024/preview.png",
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => setShowForm(!showForm),
    },
    Button: {
      style: {
        cursor: "pointer",
      },
      onClick: signOut,
    },
  };

  // const petProfileOvverride = {
  //   Breed: { color: "blue" },
  // };

  return (
    <div className="App">
      <NavBar width={"100"} overrides={navbarOverrides} />
      <header className="App-header">
        {showDetails && (
          <PetDetails
            pet={pet}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
            overrides={{
              Close: { onClick: () => setShowDetails(false) },
              style: { cursor: "pointer" },
            }}
          />
        )}
        {showForm && (
          <AddPet
            pet={updatePet}
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}

        <Pets
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button36582702: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button36582703: {
                onClick: () => {
                  setShowForm(!showForm);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                },
              },
            },
          })}
        />
      </header>
      <Footer width={"100"} />;
    </div>
  );
}

// export default App;
export default withAuthenticator(App);

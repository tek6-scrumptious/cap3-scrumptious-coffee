import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Searchbar.css";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Searchbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <Form className="d-flex search">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
        />
        <Button
          variant="success"
          onClick={() => navigate(`/search/${searchInput}`)}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}

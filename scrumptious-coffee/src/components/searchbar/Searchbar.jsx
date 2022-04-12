import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Searchbar.css";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Searchbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Form className="d-flex search">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
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

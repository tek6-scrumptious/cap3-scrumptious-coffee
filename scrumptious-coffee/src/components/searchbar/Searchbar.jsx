import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Searchbar.css";
import { FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  function keyDown(e) {
    if (e.key === "Enter") {
      navigate(`/search/${searchInput}`);
    }
  }
  return (
    <div>
      <div className="d-flex search">
        <FormControl
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => keyDown(e)}
        />
        <Button
          variant="success"
          onClick={() => navigate(`/search/${searchInput}`)}
        >
          <div>{<BsSearch className="magnify" />}</div>
        </Button>
      </div>
    </div>
  );
}

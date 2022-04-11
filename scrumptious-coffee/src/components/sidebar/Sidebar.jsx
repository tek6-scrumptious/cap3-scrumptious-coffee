// styles
import "./Sidebar.css";
import json from "../../database.json";
import { Form } from "react-bootstrap";

export default function Sidebar()
{
  return (


    <aside className="aside-container">
      <h4>Categories</h4>
      <div className="sidebar-categories">
        <label className="category-title">Coffee Roast</label><br></br>
        <input type="checkbox" id="all-roasts" name="all-roasts" value="all-roasts" />
        <label htmlFor="All roasts">All Roasts</label><br></br>
        <input type="checkbox" id="light" name="light" value="light" />
        <label htmlFor="light roast">Light</label><br></br>
        <input type="checkbox" id="medium" name="medium" value="medium" />
        <label htmlFor="vehicle3">Medium</label><br></br>
        <input type="checkbox" id="dark" name="dark" value="dark" />
        <label htmlFor="vehicle3">Dark</label><br></br>
      </div>

      <div className="sidebar-categories">
        <label className="category-title">Location</label><br></br>
        <input type="checkbox" id="africa" name="africa" value="africa" />
        <label htmlFor="All roasts">Africa</label><br></br>
        <input type="checkbox" id="hawaii" name="hawaii" value="hawaii" />
        <label htmlFor="light roast">Hawaii</label><br></br>
        <input type="checkbox" id="indonesia" name="indonesia" value="indonesia" />
        <label htmlFor="vehicle3">Indonesia</label><br></br>
        <input type="checkbox" id="south-america" name="south-america" value="south-america" />
        <label htmlFor="vehicle3">South America</label><br></br>
      </div>

      <div className="sidebar-categories">
        <label className="category-title">Price</label><br></br>
        <input type="checkbox" />
        <label htmlFor="All roasts">$10 - $15</label><br></br>
        <input type="checkbox" />
        <label htmlFor="light roast">$15 - $20</label><br></br>
      </div>

    </aside>

  );
}

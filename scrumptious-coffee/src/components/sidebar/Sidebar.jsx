import React, { useState } from 'react';

// styles
import "./Sidebar.css";
import json from "../../database.json";
import { Card } from "react-bootstrap";
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;


const roast = ['Medium', 'Dark', 'Light'];
const location = ['North America', 'South America', 'Asia', 'Central America', 'Africa'];
const defaultRoastList = ['Medium']
const defaultLocationList = ['North America']



export default function Sidebar()
{

  const [checkedRoastList, setCheckedRoastList] = useState(defaultRoastList)
  const [checkedLocationList, setCheckedLocationList] = useState(defaultLocationList)
  const [indeterminateRoast, setIndeterminateRoast] = useState(true);
  const [indeterminateLocation, setIndeterminateLocation] = useState(true);

  const [checkAllRoast, setCheckAllRoast] = useState(false);
  const [checkAllLocation, setCheckAllLocation] = useState(false);

  const onChangeRoast = (list) =>
  {
    setCheckedRoastList(list);
    setIndeterminateRoast(!!list.length && list.length < roast.length);
    setCheckAllRoast(list.length === list.length);
  };

  const onChangeLocation = (list) =>
  {
    setCheckedLocationList(list);
    setIndeterminateLocation(!!list.length && list.length < location.length);
    setCheckAllLocation(list.length === list.length);
  };

  const onCheckAllChangeRoast = (e) =>
  {
    setCheckedRoastList(e.target.checked ? roast : []);
    setIndeterminateRoast(false);
    setCheckAllRoast(e.target.checked);
  };

  const onCheckAllChangeLocation = (e) =>
  {
    setCheckedLocationList(e.target.checked ? location : []);
    setIndeterminateLocation(false);
    setCheckAllLocation(e.target.checked);
  };

  return (
    <div>

      <aside className="aside-container">
        <Card className="sidebar-card">
          <Card.Title>Categories</Card.Title>
          <Checkbox indeterminate={indeterminateRoast} onChange={onCheckAllChangeRoast} checked={checkAllRoast} className="sidebar-title">
            All Roasts
          </Checkbox>
          <br />
          <CheckboxGroup options={roast} value={checkedRoastList} onChange={onChangeRoast} className="roast" />
          <br />
          <br></br>
          <Checkbox indeterminate={indeterminateLocation} onChange={onCheckAllChangeLocation} checked={checkAllLocation} className="sidebar-title">
            All Locations
          </Checkbox>
          <br />
          <CheckboxGroup options={location} value={checkedLocationList} onChange={onChangeLocation} className="roast" />
        </Card>
      </aside>

      {/* <Checkbox>
          Dark
        </Checkbox>
        <Checkbox>
          Dark roasts
        </Checkbox>
        <Checkbox>
          Medium roasts
        </Checkbox> */}


      {/* <aside className="aside-container">
        <Card className="sidebar-card">
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
        </Card>
      </aside> */}
    </div>
  );
}

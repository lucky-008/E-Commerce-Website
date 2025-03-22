import { HiDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";

const DashboardBox = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Button
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
      aria-label="Dashboard box"
    >
      {/* Conditional trend icon */}
      <span className="chart">
        {props.grow === true ? (
          <TrendingUpIcon />
        ) : (
          <TrendingDownIcon />
        )}
      </span>

      <div className="d-flex w-100 bottomEle" style={{ position: "relative" }}>
        <div className="col1" style={{ flex: 1 }}>
          <h4 className="text-white mb-0">Total Users</h4>
          <span className="text-white">277</span>
        </div>

        
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          {props.icon && (
            <span className="icon" aria-label="Additional icon">{props.icon}</span>
          )}
        </div>
      </div>

      <div className="d-flex" style={{ width: "100%", alignItems: "center" }}>
        <h5 className="text-white mb-0 mt-0">Last Month</h5>

        {/* Menu button for the three dots */}
        <div style={{ marginLeft: "auto" }}>
          <Menu
            className="dropdown_menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              },
            }}
          >
            <MenuItem onClick={handleClose} aria-label="Last Day">
              <IoTimerOutline /> Last Day
            </MenuItem>
            <MenuItem onClick={handleClose} aria-label="Last Week">
              <IoTimerOutline /> Last Week
            </MenuItem>
            <MenuItem onClick={handleClose} aria-label="Last Month">
              <IoTimerOutline /> Last Month
            </MenuItem>
            <MenuItem onClick={handleClose} aria-label="Last Year">
              <IoTimerOutline /> Last Year
            </MenuItem>
          </Menu>

          {/* Button with three dots */}
          <Button
            className="toggleIcon"
            onClick={handleClick}
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Open menu"
          >
            <HiDotsVertical />
          </Button>
        </div>
      </div>
    </Button>
  );
};

export default DashboardBox;

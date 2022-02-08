import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 10 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                value={value}
                onChange={handleChange}
                
                centered
                aria-label="basic tabs example"
                >
                    <Tab label="Human Capital" {...a11yProps(1)}
                    sx={{
                        fontFamily: 'body',
                        fontSize: '2.5em',
                        fontWeight: '600',
                        margin: '1em',
                    }}
                />
                <Tab label="Transition Management" {...a11yProps(0)} 
                    sx={{
                        fontFamily: 'body',
                        fontSize: '2.5em',
                        fontWeight: '600',
                        margin: '1em',
                    }}
                />
                
                <Tab label="Search" {...a11yProps(2)} 
                    sx={{
                        fontFamily: 'body',
                        fontSize: '2.5em',
                        fontWeight: '600',
                        margin: '1em',
                    }}
                />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                As transition management specialists, we’ll assist you in executing the program management of strategic actions across your company, including senior management transitions, acquisition integrations, divestiture separations, and other portfolio management actions.
            </TabPanel>
            <TabPanel value={value} index={1}>
                We provide interim senior level Human Resourceleadership.  Our entire team has expertise in Human Capital Management (HCM), the comprehensive set of an organization’s practicesfor recruiting, managing, developing, and optimizing employees (as an intangible asset) in order to maximize their business value.
            </TabPanel>
            <TabPanel value={value} index={2}>
                A different approach to recruiting, we’ll embed one or more of our team members into your organization to execute the search process, ensuring that not only do we find a candidate with the right set of knowledge, skills, and abilities, but someone who fits your unique organizational culture.
            </TabPanel>
        </Box>
    );
}

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;
const styles = {
  list: {
    width: 250,
    marginTop: "70px"
  },
  fullList: {
    width: "auto"
  },
  margintop: {
    marginTop: "5px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  }
};

const SideDrawer = props => {
  const { classes } = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        {[
          "All Users",
          "Favourites",
          "Administrators",
          "Non-Admins",
          "Archived"
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer
      variant="persistent"
      open={props.toggleClicked}
      onClose={props.clicked}
      className={classes.drawer}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={props.clicked}
        onKeyDown={props.clicked}
      >
        {sideList}
      </div>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideDrawer);

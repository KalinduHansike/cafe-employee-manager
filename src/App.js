import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Home from "./pages/Home";
import CafePage from "./pages/CafePage";
import EmployeePage from "./pages/EmployeePage";
import AddEditCafePage from "./pages/AddEditCafePage";
import AddEditEmployeePage from "./pages/AddEditEmployeePage";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     paper: {
//       palette: { type: "dark" },
//     },
//   },
//   appBar1: {
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//     width: "100%",
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
// }));

function App() {
  //const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<CafePage />} /> */}
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route
            exact
            path="/employees/add"
            element={<AddEditEmployeePage />}
          />
          <Route
            exact
            path="/employees/edit/:id"
            element={<AddEditEmployeePage />}
          />
          <Route exact path="/cafes" element={<CafePage />} />
          <Route exact path="/employees" element={<EmployeePage />} />
          <Route exact path="/cafes/add" element={<AddEditCafePage />} />
          <Route exact path="/cafes/edit/:id" element={<AddEditCafePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import Hidden from "@mui/material/Hidden";
// import IconButton from "@mui/material/IconButton";
// //import InboxIcon from "@mui/material/icons/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// //import MailIcon from "@mui/material/icons/MailIcon";
// //import MenuIcon from "@mui/material/icons/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

// // import Home from "./views/Home";
// // import Login from "./views/Login";
// // import Contact from "./views/Contact";

// function App(props) {
//   const { container } = props;
//   const classes = useStyles();
//   //const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {["Home", "Contact", "Skills", "Hobby", "Login"].map((text, index) => (
//           <ListItem
//             className={classes.listItem}
//             button
//             key={text}
//             component={Link}
//             to={"/" + text}
//           >
//             <ListItemIcon>
//               {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             GVS Dev
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <BrowserRouter>
//         <nav className={classes.drawer}>
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Hidden smUp implementation="css">
//             <Drawer
//               container={container}
//               variant="temporary"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               ModalProps={{
//                 keepMounted: true, // Better open performance on mobile.
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//           <Hidden xsDown implementation="css">
//             <Drawer
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               variant="permanent"
//               open
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//         </nav>

//         <main className={classes.content}>
//           <div className={classes.toolbar} />

//           <Routes>
//             <Route exact path="/employees" element={<EmployeePage />} />
//             {/* <Route exact path="/" render={() => <CafePage />} />
//             <Route path="/CafePage" render={() => <CafePage />} />
//             <Route path="/EmployeePage" render={() => <EmployeePage />} />
//             <Route path="/EmployeePage" render={() => <EmployeePage />} />
//             <Route path="/contact" render={() => <div>Page contact</div>} /> */}
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </div>
//   );
// }

// App.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.instanceOf(
//     typeof Element === "undefined" ? Object : Element
//   ),
// };

// export default App;

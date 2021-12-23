import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
//import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
//import Collapse from '@mui/material/Collapse';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBox from "@mui/icons-material/AddBox";
import Rating from "@mui/material/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function RecipeReviewCard() {
  //const [expanded, setExpanded] = React.useState(false);

  //const handleExpandClick = () => {
  //  setExpanded(!expanded);
  //};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="Avatar">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <AddBox />
          </IconButton>
        }
        title="Jarinda Smith"
        subheader="Marketing - Graduation May, 2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <i>Iowa State University - Ivy College of Business</i>
          <Rating name="size-small" defaultValue={2} size="small" />
          <br />
          <br />
          (help with) I would like help with: communications, technical
          discussion, story building.
          <br />
          (summary)This is my summary I am writing about myself to tell of my
          experiences at university and what I am looking for in a career.
          <br />
          (note to recruiter) I would like help telling my story, crafting
          stories that hiring managers can relate to. <br />
          <br />
          <a href="./resume.pdf">Resume</a>
          <br />
          <br />
          <i>Availability:&nbsp;Monday - Friday 8 am to 5 pm</i>
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}

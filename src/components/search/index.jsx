import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setSearchValue, placeholder, width }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
      <SearchIcon sx={{ marginRight: { md: "1rem", xs: ".5rem" } }} />
      <TextField
        id="standard-multiline-static"
        variant="standard"
        placeholder={placeholder}
        sx={{
          input: {
            width: {
              xs: "19rem",
              md: "24rem",
            },
          },
          "input::placeholder": {
            fontSize: {
              xs: ".8rem",
              md: "1rem",
            },
          },
          ".MuiInput-underline::before ,.MuiInput-underline::after ": {
            borderBottom: "none",
          },
        }}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </Box>
  );
};
export default Search;

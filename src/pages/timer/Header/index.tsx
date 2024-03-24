// @mui
import { Box, Button, IconButton, Input } from "@mui/material";
import { SearchbarStyle, TimeInput } from "./styles";
// components
import Iconify from "src/components/Iconify";
// redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "src/redux/slices/counter";

export default function Header() {
  // hooks
  const dispatch = useDispatch();
  // state
  const counterValue = useSelector((state) => state.counter.value);

  const handleFocus = (event: { target: { select: () => void } }) => {
    event.target.select();
  };

  return (
    <SearchbarStyle>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="What are you working on?"
        sx={{
          pr: 2,
          pl: 2,
          fontWeight: "fontWeightBold",
          // backgroundColor: "#f5a",
        }}
      />

      <Box
        p={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Button
            sx={{
              textTransform: "none",
              color: "text.primary",
              whiteSpace: "nowrap",
              borderRadius: 2,
            }}
            startIcon={
              <Iconify
                icon="eva:plus-fill"
                sx={{ color: "#C95EBE", width: 16, height: 16 }}
              />
            }
          >
            Create a project
          </Button>
        </Box>

        <Box display="flex" flexDirection="row">
          <IconButton aria-label="delete" sx={{ marginX: 0.5 }}>
            <Iconify
              icon="eva:pricetags-outline"
              sx={{ color: "text.primary", width: 20, height: 20 }}
            />
          </IconButton>

          <IconButton aria-label="delete" sx={{ marginX: 0.5 }}>
            <Iconify
              icon="ic:baseline-attach-money"
              sx={{ color: "text.primary", width: 20, height: 20 }}
            />
          </IconButton>
        </Box>

        <Box>
          <TimeInput
            fullWidth
            disableUnderline
            value="00:00:00"
            onFocus={handleFocus}
          />
        </Box>

        <IconButton
          size="medium"
          aria-label="delete"
          sx={{ marginX: 1, backgroundColor: "#C95EBE" }}
        >
          <Iconify
            icon="line-md:play-filled"
            sx={{ color: "#fff", width: 24, height: 24 }}
          />
        </IconButton>

        <Box
          ml={2}
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          sx={{ backgroundColor: "#f1f0f2", borderRadius: 4 }}
        >
          <IconButton
            size="small"
            aria-label="delete"
            onClick={() => dispatch(decrement())}
            sx={{ backgroundColor: "#2C1338", margin: 0.5 }}
          >
            <Iconify
              icon="line-md:play-filled"
              sx={{ color: "#fff", width: 8, height: 8 }}
            />
          </IconButton>
          <span>{counterValue}</span>
          <IconButton
            size="small"
            aria-label="delete"
            onClick={() => dispatch(increment())}
            sx={{ backgroundColor: "#d6c1f8", margin: 0.5 }}
          >
            <Iconify
              icon="eva:plus-fill"
              sx={{ color: "text.primary", width: 10, height: 10 }}
            />
          </IconButton>
        </Box>
      </Box>
    </SearchbarStyle>
  );
}

import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

const MuiButtons = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  console.log(formats);

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="contained" color="warning">
          Contained
        </Button>
        <Button variant="contained" color="info">
          Contained
        </Button>
        <Button variant="contained" color="success">
          Contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button color="success">Contained</Button>
          <Button color="success">Contained</Button>
          <Button color="success">Contained</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;

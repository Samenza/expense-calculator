import { useTheme } from "@emotion/react";

import {
  Button,
  IconButton,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { api } from "../../configs/axiosConfigs";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import MoreVert from "@mui/icons-material/MoreVert";
import Flex from "../Flex";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";

const ExpenseListItems = ({
  item: { payer, title, price, id },
  getListData,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
  const { palette } = useTheme();
  function deleteExpense() {
    api.delete(`expense/${id}`).then((res) => {
      setOpenModal(false);
      getListData();
    });
  }

  const open = Boolean(anchorEl);

  return (
    <Paper
      sx={{
        display: "flex",
        width: "85%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: palette.secondaryLight.main,
        padding: " 0 10px 10px",
      }}
    >
      <Stack sx={{ gap: "0.5rem", padding: "10px", width: "100%" }}>
        {payer?.name && (
          <Typography sx={{ color: palette.darkBlue.main }} variant="h6">
            {title}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!payer?.name && (
            <Typography
              sx={{ color: palette.secondaryLight.contrastText }}
              variant="h6"
            >
              {title}
            </Typography>
          )}
          {payer?.name && (
            <Typography
              sx={{
                backgroundColor: palette.greenLight.main,
                color: palette.secondaryLight.contrastText,
                padding: "5px 8px",
                borderRadius: "5px",
              }}
              variant="subtitle2"
            >
              {payer?.name}
            </Typography>
          )}
          <Flex sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                backgroundColor: palette.pink.main,
                padding: "5px 8px",
                borderRadius: "5px",
                color: "#e0f6fa",
              }}
              variant="body1"
            >
              {price}{" "}
              <Typography component={"span"} sx={{ fontSize: "xx-small" }}>
                تومان
              </Typography>
            </Typography>{" "}
            <IconButton
              aria-describedby={id}
              variant="contained"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MoreVert />
            </IconButton>{" "}
          </Flex>
          <Popover
            id={id}
            open={open}
            sx={{
              "& .MuiPopover-paper": { boxShadow: "none", borderRadius: "5px" },
            }}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl()}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
          >
            <Stack
              sx={{
                gap: "2rem",
                padding: "1rem",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: palette.secondary.main,
                  color: palette.darkBlue.main,
                  borderRadius: "5px",
                }}
                onClick={() => {
                  navigate(`${id}`);
                }}
              >
                <ModeEditOutlineIcon color={palette.darkBlue.main} />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(true);
                  setAnchorEl();
                }}
                sx={(theme) => ({
                  color: palette.darkBlue.main,
                  backgroundColor: theme.palette.error.main,
                  borderRadius: "5px",
                })}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Popover>
        </Box>
      </Stack>{" "}
      <ConfirmationModal
        open={openModal}
        setOpen={setOpenModal}
        agree={deleteExpense}
        title=" این مورد حذف شود؟"
      />
    </Paper>
  );
};

export default ExpenseListItems;

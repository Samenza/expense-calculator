import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import * as React from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ConfirmationModal = ({ open, setOpen, agree, disagree }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          این مورد حذف شود؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={agree}>بله</Button>
        <Button onClick={handleClose}>خیر</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;

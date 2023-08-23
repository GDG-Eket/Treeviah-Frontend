import React from "react";
import Image from "next/image";
import prof from "../../public/Images/prof.png";
import { IconButton, InputAdornment, TextField } from "@mui/material";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AccountPage2 = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className=" h-[150px] w-[150px] mb-12 md:mb-5 ml-[2%]">
          <Image src={prof} alt="" width={400} height={300} className="" />
        </div>
        <form className="flex flex-col gap-3 w-full md:w-[35%] ">
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue="placeholder"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="placeholder"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            defaultValue="placeholder"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="password"
            defaultValue="placeholder"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {/* <AccountCircleIcon /> */}
                    {/* <VisibilityIcon /> */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="confirm password"
            defaultValue="placeholder"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    {/* <AccountCircleIcon /> */}
                    {/* <VisibilityIcon /> */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="flex flex-row gap-3 items-center justify-center mt-3">
            <button className="text-primarylight w-[100px] h-[35px] border border-primary rounded-md">
              Cancel
            </button>
            <button className="bg-primary text-white w-[100px] h-[35px] rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountPage2;

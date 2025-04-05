import { FormControl, MenuItem, Select } from "@mui/material";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  onChange?: (data: any) => void;
};

const CustomSelect: React.FC<Props> = ({ options, onChange }) => {
  const renderOption = (option: Option) => {
    return <MenuItem key={option.value}>{option.label}</MenuItem>;
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        onChange={onChange}
        displayEmpty
        sx={{
          borderRadius: "8px",
          "& .MuiOutlinedInput-input": {
            padding: "8px 12px",
          },
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {options?.map(renderOption)}{" "}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;

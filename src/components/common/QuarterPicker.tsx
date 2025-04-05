import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const QUARTERS = [
  { label: "Quý 1", value: 1 },
  { label: "Quý 2", value: 2 },
  { label: "Quý 3", value: 3 },
  { label: "Quý 4", value: 4 },
];

type QuarterPickerProps = {
  value: { year: number; quarter: number };
  onChange: (val: { year: number; quarter: number }) => void;
};

const QuarterPicker: React.FC<QuarterPickerProps> = ({ value, onChange }) => {
  const [year, setYear] = useState<Dayjs>(dayjs().year(value.year));

  const handleQuarterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuarter = Number(event.target.value);
    onChange({ year: year.year(), quarter: newQuarter });
  };

  const handleYearChange = (newYear: Dayjs | null) => {
    if (newYear) {
      setYear(newYear);
      onChange({ year: newYear.year(), quarter: value.quarter });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <DatePicker
          views={["year"]}
          label="Năm"
          value={year}
          onChange={handleYearChange}
          slotProps={{
            textField: { variant: "outlined", size: "small" },
          }}
        />

        <TextField
          select
          label="Quý"
          value={value.quarter}
          onChange={handleQuarterChange}
          size="small"
        >
          {QUARTERS.map((q) => (
            <MenuItem key={q.value} value={q.value}>
              {q.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </LocalizationProvider>
  );
};

export default QuarterPicker;

import {
  Button,
  ClickAwayListener,
  Input,
  Popper,
  styled,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerSelectionState } from "@mui/x-date-pickers/internals";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateView } from "@mui/x-date-pickers/models";
import {
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers/PickersDay/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
  isHovered: boolean;
}

type Props = {
  placeholder?: string;
  views?: DateView[];
  isWeekView?: boolean;
  format?: string;
  onChange?: (
    value: any,
    selectionState?: PickerSelectionState,
    selectedView?: DateView | undefined
  ) => void;
};

const CustomDatePicker: React.FC<Props> = ({
  placeholder = "Tuần này",
  views,
  format = "DD/MM/YYYY",
  isWeekView,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== "isSelected" && prop !== "isHovered",
  })<CustomPickerDayProps>(({ theme, isSelected, isHovered, day }) => ({
    borderRadius: 0,
    ...(isSelected && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.main,
      },
    }),
    ...(isHovered && {
      backgroundColor: theme.palette.primary.light,
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.light,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.primary.dark,
        "&:hover, &:focus": {
          backgroundColor: theme.palette.primary.dark,
        },
      }),
    }),
    ...(day.day() === 0 && {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    }),
    ...(day.day() === 6 && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
  })) as React.ComponentType<CustomPickerDayProps>;

  const isInSameWeek = (dayA: Dayjs, dayB: Dayjs | null | undefined) => {
    if (dayB == null) {
      return false;
    }

    return dayA.isSame(dayB, "week");
  };

  const Day = (
    props: PickersDayProps<Dayjs> & {
      selectedDay?: Dayjs | null;
      hoveredDay?: Dayjs | null;
    }
  ) => {
    const { day, selectedDay, hoveredDay, ...other } = props;

    return (
      <CustomPickersDay
        {...other}
        day={day}
        sx={{ px: 2.5 }}
        disableMargin
        selected={false}
        isSelected={isInSameWeek(day, selectedDay)}
        isHovered={isInSameWeek(day, hoveredDay)}
      />
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popper" : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{
              borderRadius: "8px",
              borderColor: "#D1D5DB",
              color: "#374151",
              textTransform: "none",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f9fafb" },
            }}
          >
            <FiCalendar size={16} />
            <span className="text-[16px] text-[#3A3E4C]">{selectedDate ? selectedDate.format(format) : placeholder}</span>
            <FiChevronDown size={16} />
          </Button>

          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            className="bg-white"
          >
            <DateCalendar
              displayWeekNumber={isWeekView}
              views={views}
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
                onChange?.(newValue);
                handleClose();
              }}
              slots={isWeekView ? { day: Day } : {}}
              slotProps={
                isWeekView
                  ? {
                      day: (ownerState) =>
                        ({
                          hoveredDay: true,
                          onPointerEnter: () => {
                            onChange?.(ownerState.day);
                            setSelectedDate?.(ownerState.day);
                          },
                          onPointerLeave: () => onChange?.(null),
                        } as any),
                    }
                  : {}
              }
            />
          </Popper>
        </div>
      </ClickAwayListener>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;

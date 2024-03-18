import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import plLocale from '@fullcalendar/core/locales/pl';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);


    const handleDateClick = (selected) => {
        const title = prompt("Podaj tytuł dla wydarzenia")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr} -${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });

        }
    }

    const uppercaseText = (info) => {
        return info.text.toUpperCase()
    }

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Czy jesteś pewien, ze chcesz usunąć wydarzenie ${selected.event.title}?`
            )
        ) {
            selected.event.remove();
        }
    };

    return (<Box m='20px'>

        <Box display="flex" justifyContent="space-between">

            <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin

                    ]}
                    locale={plLocale}
                    firstDay={1}
                    buttonText={uppercaseText}
                    dayHeaderContent={uppercaseText}
                    headerToolbar={{
                        left: "dayGridMonth,timeGridWeek,listMonth",
                        center: "title",
                        right: "prev,next",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventSet={(events) => setCurrentEvents(events)}

                />
            </Box>
        </Box>
    </Box>
    )
}

export default Calendar;

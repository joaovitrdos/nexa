import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import { styles } from './styles';
import { Feather } from "@expo/vector-icons";
import { ptBR } from '../../utils/localeCalendarConfig';


LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export default function CalendarHome() {

  const [day, setDay] = useState<DateData>();

  return (
    <View style={styles.container}>
      <Calendar style={styles.agenda}
      renderArrow={(direction: "right" | "left") => <Feather name={`chevron-${direction}`} size={24} color="#E8E8E8"/>}
      headerStyle={{
        borderBottom: 0.5, 
        borderBottomColor: "#E8E8E8",
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textMonthFontSize: 18,
        monthTextColor: "#FFF",
        todayTextColor: "#2F80ED",
        selectedDayBackgroundColor: "#000",
        selectedDayTextColor: "#FFF",
        arrowColor: "#E8E8E8",
        calendarBackground: "trasnparent",
        textDayStyle: {color: "#E8E8E8"},
        textDisabledColor:"#717171",
      }}
      minDate={new Date().toDateString()}
      hideExtraDays
      onDayPress={setDay}
      markedDates={day && {
        [day.dateString]: {selected: true},
      }}
      />
    </View>
    
  )
}
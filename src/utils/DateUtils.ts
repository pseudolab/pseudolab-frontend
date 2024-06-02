import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

export interface DateDuration {
    years: number,
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

export const getDiffDuration = (startDate: Date, endDate: Date): DateDuration => {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const diff = end.diff(start);
    const durationObject = dayjs.duration(diff);

    const years = Math.floor(durationObject.asYears());
    const months = Math.floor(durationObject.asMonths()) % 12;
    const days = Math.floor(durationObject.asDays()) % 30;
    const hours = durationObject.hours();
    const minutes = durationObject.minutes();
    const seconds = durationObject.seconds();

    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}
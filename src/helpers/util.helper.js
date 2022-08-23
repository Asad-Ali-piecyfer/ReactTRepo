import dayjs from "dayjs"
export class UtilHelper {
    static uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }

    static formatTimestampToDate(timestamp = 0) {
        const date = new Date(timestamp?.seconds * 1000)
        return dayjs(date).format("DD/MM/YYYY")
    }

    static formatDate(date) {
        return dayjs(date).format("DD/MM/YYYY")
    }
}

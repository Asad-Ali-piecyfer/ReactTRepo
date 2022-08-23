import {REGEX_CONFIG} from "./regex.config"

export const VALIDATION_CONFIG = {
    required: "Field is required",
    minLength: {
        value: 1,
        message: "Field must have at least 1 character",
    },
    minLengthName: {
        value: 3,
        message: "Field must have at least 3 characters",
    },
    maxShortLength: {
        value: 100,
        message: "Field must have maximum 100 characters",
    },
    maxLength: {
        value: 255,
        message: "Field must have maximum 255 characters",
    },
    minLengthText: {
        value: 15,
        message: "Field is too short", // by default rich text puts <div><br></div>
    },
    maxLengthShortText: {
        value: 1000,
        message: "Field must have maximum 1000 characters",
    },
    maxLengthText: {
        value: 5000,
        message: "Field must have maximum 5000 characters",
    },
    minLengthPassword: {
        value: 8,
        message: "Password must have at least 8 characters",
    },
    maxLengthPassword: {
        value: 20,
        message: "Password must have maximum 20 characters",
    },
    email: {
        value: REGEX_CONFIG.email,
        message: "Field must be a valid email",
    },
    phoneNumber: {
        value: REGEX_CONFIG.phoneNumber,
        message: "Field must be a valid phone number",
    },
    phoneNumberVerificationCode: {
        value: REGEX_CONFIG.phoneNumberVerificationCode,
        message: "Field must be a valid phone number verification code",
    },
    website: {
        value: REGEX_CONFIG.website,
        message: "Field must be a website",
    },
    facebookUrl: {
        value: REGEX_CONFIG.facebookUrl,
        message: "Please enter a valid Facebook URL",
    },
    youtubeUrl: {
        value: REGEX_CONFIG.youtubeUrl,
        message: "Please enter a valid YouTube URL",
    },
    rtmpUrl: {
        value: REGEX_CONFIG.rtmpUrl,
        message: "Please enter a valid RTMP URL",
    },
    zip: {
        value: REGEX_CONFIG.zip,
        message: "Field must be a valid zip",
    },
    numeric: {
        value: REGEX_CONFIG.numeric,
        message: "Field must be a valid number",
    },
    minAmount: {
        value: 1,
        message: "Minimum amount is 1",
    },
    minAmount0: {
        value: 0,
        message: "Minimum amount is 0",
    },
    minLengthConfirmationCode: {
        value: 6,
        message: "Please input 6 digits",
    },
    ssnLast4: {
        value: REGEX_CONFIG.ssnLast4,
        message: "Please provide last 4 digits of your Social Security Number",
    },
    username: {
        value: REGEX_CONFIG.username,
        message:
            "Username must be from 4 to 100 characters long and can contain only numbers, letters and these symbols: `-`, `_`, `.`",
    }
}

export const REGEX_CONFIG = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    zip: /^\d{5}$|^\d{5}-\d{4}$/,
    phoneNumber: /^\+[\d]{11,12}$/,
    phoneNumberVerificationCode: /^\d{6}$/,
    website: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
    facebookUrl: /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(.?)?]+/,
    youtubeUrl: /^(https?:\/\/)?(www\.)?youtube.com\/[a-zA-Z0-9(.?)?]+/,
    rtmpUrl: /rtmp:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
    username: /^[-a-zA-Z0-9_.]{4,100}$/,
    numeric: /^[0-9]*$/,
    ssnLast4: /^\d{4}$/,
}

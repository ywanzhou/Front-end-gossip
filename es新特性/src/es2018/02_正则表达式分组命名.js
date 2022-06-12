const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

const matchObj = RE_DATE.exec('2022-02-22')
const year = matchObj.groups.year // 2022
const month = matchObj.groups.month // 02
const day = matchObj.groups.day // 22

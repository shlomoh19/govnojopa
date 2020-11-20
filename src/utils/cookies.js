export const getCookiesByName = name => {
  const name_cook = name + '='

  const cookie = document.cookie.split('; ').find(x => x.startsWith(name_cook))
  const cookieValue = cookie ? cookie.substr(name_cook.length) : ''

  return cookieValue
}

export const setCookiesLocale = language => {
  let date = new Date(Date.now() + 31*86400e3)
  date = date.toUTCString()
  document.cookie = 
  encodeURIComponent('locale') +
  '=' +
  encodeURIComponent(language) +
  '; ' +
  'expires=' +
  date 
}
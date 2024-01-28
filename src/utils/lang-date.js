const showFormattedDate = (date, lang) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if (lang == 'id') {
    return new Date(date).toLocaleDateString('id-ID', options);
  }

  if (lang == 'en') {
    return new Date(date).toLocaleDateString('en-US', options);
  }
};

export default showFormattedDate;

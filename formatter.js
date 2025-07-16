const DataFormatter = {
  formatDate: function (dateStr, locale = 'en-GB') {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
};

// Today's Date
const today = new Date();
const formattedDate = DataFormatter.formatDate(today);

console.log("Formatted Date:", formattedDate);
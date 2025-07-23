const dateFormate = (date) => {
  console.log("Received date:", date); // Debug line
  return new Date(date).toLocaleString('en-Us',{
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}

export default dateFormate
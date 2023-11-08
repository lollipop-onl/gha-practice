const d = new Date();

console.log(
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "full",
    timeZone: "Asia/Tokyo",
  }).format(d)
);

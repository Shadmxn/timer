const args = process.argv.slice(2);
const times = args.filter(time => !isNaN(time) && time >= 0);

times.forEach(time => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
});

export const formatDate = (dateString) => {
  const [year, month, day, hour, minute] = dateString.split(/\D/);
  return `${day}.${month}.${year} ${hour}:${minute}`;
};

export const getATILink = (ati, className) => {
  const href = `https://ati.su/firms/${ati}/info`;
  return (
    <a rel="noreferrer" className={className} href={href} target="_blank">
      {ati}
    </a>
  );
};

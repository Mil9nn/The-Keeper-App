import React from "react";

function Footer() {
  const name = "Milan Singh";
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; {year} by {name}
      </p>
    </footer>
  );
}

export default Footer;

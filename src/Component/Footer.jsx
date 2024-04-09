import React from "react";

export const Footer = () => {
  return (
    <footer class="flex footer">
      <div class="flex top">
        <div class="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div class="socials">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="" target="_blank">
                LinkedIN
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="bottom">© All right reserved. Made by me with 🚀</div>
    </footer>
  );
};

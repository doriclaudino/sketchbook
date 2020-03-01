import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import SR from "~components/sr";
import sketchTitle from "~util/sketch-title";

const styles = css`
  display: inline-block;
  font-size: var(--font-large);
  color: var(--white);
  text-decoration: none;
  line-height: 0;
`;

const icons = {
  menu: (
    <g fill="transparent" stroke="currentColor">
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
    </g>
  ),
  up: (
    <g fillRule="evenodd" fill="transparent" stroke="currentColor">
      <path d="m4.5 4.5h3v3h-3z" />
      <path d="m4.5 10.5h3v3h-3z" />
      <path d="m4.5 16.5h3v3h-3z" />
      <path d="m10.5 4.5h3v3h-3z" />
      <path d="m10.5 10.5h3v3h-3z" />
      <path d="m10.5 16.5h3v3h-3z" />
      <path d="m16.5 4.5h3v3h-3z" />
      <path d="m16.5 10.5h3v3h-3z" />
      <path d="m16.5 16.5h3v3h-3z" />
    </g>
  ),
  left: (
    <path
      d="m10 4.94339811-9.09787618 14.55660189h18.19575238z"
      stroke="currentColor"
      fill="transparent"
      transform="matrix(0 -1 1 0 -2 22)"
    />
  ),
  right: (
    <path
      d="m14 4.94339811-9.09787618 14.55660189h18.19575238z"
      stroke="currentColor"
      fill="transparent"
      transform="matrix(0 -1 -1 0 26 26)"
    />
  ),
  info: (
    <g fillRule="evenodd">
      <circle cx="12" cy="12" r="9" stroke="currentColor" fill="transparent" />
      <path
        d="m9 16.6018182v-1.1454546h2.5454545v-5.3454545h-2.5454545v-1.14545455h3.8181818v6.49090905h2.5454546v1.1454546zm3.1818182-9.03636365c-.3224259 0-.5833324-.05090859-.7827273-.15272728s-.2990909-.29272587-.2990909-.57272727v-.08909091c0-.28848629.099696-.48575704.2990909-.59181818s.4603014-.15909091.7827273-.15909091c.3224258 0 .5833323.05302977.7827273.15909091.1993949.10606114.2990909.30333189.2990909.59181818v.08909091c0 .2800014-.1018172.47090858-.3054546.57272727s-.4624227.15272728-.7763636.15272728z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  ),
  close: (
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="square"
    >
      <path d="m5.39473684 5 14.21052636 15" />
      <path d="m19.6052632 5-14.6052632 14.6052632" />
    </g>
  ),
};

const Icon = ({
  to,
  href,
  label,
  icon,
  styles: passedStyle = {},
  onClick = () => {},
}) => {
  const id =
    "Icon_" +
    Math.random()
      .toString(36)
      .substr(2, 9);

  const Contents = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[icon]}
    </svg>
  );

  if (to || href) {
    return to ? (
      <Link
        aria-labelledby={id}
        css={styles}
        to={to}
        title={label || sketchTitle(to)}
      >
        <Contents />
        <SR id={id}>{label || sketchTitle(to)}</SR>
      </Link>
    ) : (
      <a
        aria-labelledby={id}
        css={styles}
        href={href}
        title={label || sketchTitle(to)}
      >
        <Contents />
        <SR id={id}>{label || sketchTitle(to)}</SR>
      </a>
    );
  }

  return (
    <span
      onClick={onClick}
      css={css`
        opacity: 0.2;
        ${styles};
        ${passedStyle};
      `}
      aria-hidden="true"
    >
      <Contents />
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
};

export default Icon;

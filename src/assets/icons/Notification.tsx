import { SvgIcon, SvgIconProps } from '@mui/material';

interface NotificationProps extends SvgIconProps {}

export function NotificationIcon(props: NotificationProps) {
  return (
    <SvgIcon {...props}>
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        {...props} // Allows you to pass additional props, like `className` or `style`
      >
        <defs>
          <style>
            {`.cls-1{fill:#231f20;}
          .cls-2{fill:#ff8e5a;}
          .cls-3{fill:#d12200;}
          .cls-4{fill:#ffffff;}
          .cls-5{fill:#ffba50;}
          .cls-6{fill:#00a1d3;}`}
          </style>
        </defs>
        <path
          className="cls-1"
          d="M43,8.277H40.548V7a2.5,2.5,0,0,0-2.5-2.5H37A2.5,2.5,0,0,0,34.5,7V8.277H15.5V7A2.5,2.5,0,0,0,13,4.5H11.952A2.5,2.5,0,0,0,9.452,7V8.277H7a2.5,2.5,0,0,0-2.5,2.5V43A2.5,2.5,0,0,0,7,45.5H43A2.5,2.5,0,0,0,45.5,43V10.777A2.5,2.5,0,0,0,43,8.277Z"
        />
        <rect
          className="cls-2"
          height="6.446"
          rx="1.5"
          width="4.044"
          x="35.503"
          y="5.5"
        />
        <rect
          className="cls-2"
          height="6.446"
          rx="1.5"
          width="4.044"
          x="10.452"
          y="5.5"
        />
        <path
          className="cls-3"
          d="M5.5,10.777A1.5,1.5,0,0,1,7,9.277H9.452v1.169a2.5,2.5,0,0,0,2.5,2.5H13a2.5,2.5,0,0,0,2.5-2.5V9.277H34.5v1.169a2.5,2.5,0,0,0,2.5,2.5h1.045a2.5,2.5,0,0,0,2.5-2.5V9.277H43a1.5,1.5,0,0,1,1.5,1.5v3.691H5.5Z"
        />
        <path
          className="cls-4"
          d="M43,44.5H7A1.5,1.5,0,0,1,5.5,43V15.468h39V43A1.5,1.5,0,0,1,43,44.5Z"
        />
        <path
          className="cls-1"
          d="M39.625,21.126l-2.493-.62-.06-2.568a.5.5,0,0,0-.813-.379L33.2,20.007a12.983,12.983,0,1,0,3.479,4.506L39.817,22a.5.5,0,0,0-.192-.875Z"
        />
        <path
          className="cls-5"
          d="M36.135,20.649,33.7,22.613l-.039-1.692,2.435-1.95Z"
        />
        <path
          className="cls-6"
          d="M25,41.844a11.9,11.9,0,1,1,7.658-20.992l.06,2.552-1.712,1.378a7.869,7.869,0,1,0,.607.8l1.735-1.4,2.356.586A11.763,11.763,0,0,1,36.9,29.946,11.912,11.912,0,0,1,25,41.844Z"
        />
        <path
          className="cls-4"
          d="M24.542,30.372a.5.5,0,0,0,.469.325.491.491,0,0,0,.175-.032c.079-.029.191-.073,5.642-4.455a6.962,6.962,0,1,1-.6-.8c-2.812,2.259-5.194,4.164-5.468,4.356A.5.5,0,0,0,24.542,30.372Z"
        />
        <path
          className="cls-5"
          d="M35.968,23.8l-1.643-.409,2.421-1.953,1.658.412Z"
        />
      </svg>
    </SvgIcon>
  );
}

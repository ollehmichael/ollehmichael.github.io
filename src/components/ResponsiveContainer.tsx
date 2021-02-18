import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import { MediaContextProvider } from "./MediaContext";

const ResponsiveContainer = ({ children }: { children: any }): JSX.Element => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

export default ResponsiveContainer;

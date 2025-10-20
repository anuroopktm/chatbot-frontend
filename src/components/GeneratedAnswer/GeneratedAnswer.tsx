import { ReactComponent as AirDropIcon } from "@/assets/actions/airdrop.svg?react";
import Accordion from "../common/Accordion/Accordion";
import Chips from "../common/Chips/Chips";

type Props = {};

const GeneratedAnswer = (props: Props) => {
  return (
    <Accordion icon={AirDropIcon} title="Generated Answer">
      <div className="p-2.5 flex flex-col space-y-2.5">
        <div>
          <h6 className="text-neutral-primary font-semibold text-sm">
            Dear user,
          </h6>
          <p className="text-color-1000 font-normal text-xs">
            Thank you for reaching out to us. I understand that you're looking
            to test your mobile apps and websites on a variety of real iOS
            devices, and I'm here to assist you in getting started with our
            platform. To begin testing your iOS apps on iPhones using
            TestFlight, please follow these steps: Sign up for App Live if you
            haven't already done so. Log in to your App Live account. Click on
            "View All Sources" at the bottom of the menu. Select "Install via
            TestFlight." Choose the iPhone model you wish to test your app on
            from the extensive list of supported devices. Start a test session.
            If Two-factor authentication is enabled for your Apple ID, please
            follow the following: Open the App Store. Click on the Blue User
            icon at the top right corner of the App Home Page. Enter your Apple
            ID and Password when prompted. Let me know if you want this in a
            different format or if you need help with the next steps. Best
            Regards, Xcelerate Support
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Chips type="LINK" label="I Phone" />
          <Chips type="LINK" label="Docs" />
          <Chips type="LINK" label="Live" />
        </div>
      </div>
    </Accordion>
  );
};

export default GeneratedAnswer;
